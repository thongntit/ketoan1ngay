import Head from 'next/head'
import { useEffect } from 'react'

import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { indexQuery, navQuery, settingsQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'

function Index({
  allPosts: initialAllPosts,
  preview,
  blogSettings,
  navSettings,
}) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  const { title = 'Blog.', h1, logo } = blogSettings || {}

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({ page_name: 'homepage' })
    }
  }, [])
  return (
    <Layout preview={preview} navSettings={navSettings}>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  /* check if the project id has been defined by fetching the vercel envs */
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
    const blogSettings = await getClient(preview).fetch(settingsQuery)
    const navSettings = await getClient(preview).fetch(navQuery)

    return {
      props: { allPosts, preview, blogSettings, navSettings },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
  }

  /* when the client isn't set up */
  return {
    props: {},
    revalidate: undefined,
  }
}

export default Index
