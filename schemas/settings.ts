import { CogIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'h1',
      description: 'This field is the main h1 tag of your blog.',
      title: 'H1',
      type: 'string',
      initialValue: 'H1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
  ],
})
