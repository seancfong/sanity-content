import {BsFillLightbulbFill, BsLink45Deg, BsTools, BsTrophyFill} from 'react-icons/bs'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  title: 'Project',
  icon: BsFillLightbulbFill,
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    }),
    defineField({
      name: 'award',
      title: 'Awards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'award',
          type: 'award',
          icon: BsTrophyFill,
        }),
      ],
      validation: (Rule) => Rule.max(1).warning('Only the first award will be rendered'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'linkItem',
          type: 'object',
          icon: BsLink45Deg,
          fields: [
            defineField({
              title: 'Link URL',
              name: 'linkUrl',
              type: 'string',
            }),
            defineField({
              title: 'React Icon',
              name: 'reactIcon',
              type: 'reference',
              to: {
                type: 'reactIcon',
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'techStackItem',
          type: 'object',
          icon: BsTools,
          fields: [
            defineField({
              title: 'Content',
              name: 'content',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
