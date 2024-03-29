import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

const GTM_ID = 'GTM-55M8MG7'

export default class Document extends ServerStyleSheetDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script id="google-tag-manager" strategy="worker">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
          </Script>
          <Script
            src="/gtag.js?id=G-6B44WFNMJF"
            strategy="worker"
          />
          <Script id="google-analytics" strategy="worker">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6B44WFNMJF');
        `}
          </Script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="/gtm.js" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
