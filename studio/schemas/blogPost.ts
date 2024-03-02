import {defineField, defineType} from 'sanity'
import {CustomMarkdownInput} from '../plugins/MarkdownInputCustomPreview'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'markdown',
      components: {input: CustomMarkdownInput},
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
