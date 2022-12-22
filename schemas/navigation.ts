import { LinkIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'navigations',
  title: 'Navigations',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      description: 'This field is what display on nav bar.',
      title: 'Title',
      type: 'string',
      initialValue: '',
      validation: (rule) => rule.required(),
    },
    {
      name: 'order',
      description: 'This field is the order of nav item.',
      title: 'Order',
      type: 'string',
      initialValue: '1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'childs',
      description: 'Setting for child nav items',
      title: 'Children',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    },
  ],
})
