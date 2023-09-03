import {BsImageFill} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const reactIcon = defineType({
  title: 'React Icon',
  name: 'reactIcon',
  type: 'document',
  icon: BsImageFill,
  fields: [
    defineField({
      title: 'Icon Library',
      name: 'library',
      type: 'string',
      options: {
        list: [{title: 'Bs', value: 'Bs'}],
      },
    }),
    defineField({
      title: 'Icon Name',
      name: 'name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'library',
    },
  },
})
