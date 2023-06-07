import { LinkIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'navigations',
  title: 'Navigations',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'id',
      description: 'This field is ID of nav item.',
      title: 'ID',
      type: 'number',
      validation: (rule) =>
        rule.required().custom((id) => {
          if (typeof id === 'string') {
            const parsedValue = parseFloat(id)
            return isNaN(parsedValue) ? 'Please provide a valid number' : true
          }
          return true
        }),
    },
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
      name: 'level',
      description: 'This field is the level of nav item.',
      title: 'Level',
      type: 'string',
      initialValue: '1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'parent',
      description: 'This field is id of parent nav item.',
      title: 'Parent',
      type: 'string',
      validation: (rule) => rule,
    },
    {
      name: 'isEnable',
      description: 'This field describe that nav item is enable or not.',
      title: 'Is Enable',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule,
    },
    {
      name: 'href',
      description: 'This field is href link of nav item.',
      title: 'Href',
      type: 'string',
      validation: (rule) => rule,
    },
  ],
})
