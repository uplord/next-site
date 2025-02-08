import { useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { ProjectsList as ProjectsListComponent } from '@/components/blocks/Projects'
import { ProjectsListProps } from '@/types/section'

import data from '@/data/projects.json'

const imageSources = data.list
  .filter(item => item.type === 'image')
  .map(item => ({ src: item.src, alt: item.alt, tooltip: item.tooltip }))

const svgNames = data.list
  .filter(item => item.type === 'svg')
  .map(item => ({ name: item.name, tooltip: item.tooltip }))

const item: ProjectsListProps = data.list[0] as ProjectsListProps

const meta: Meta<typeof ProjectsListComponent> = {
  title: 'Blocks/Projects',
  component: ProjectsListComponent,
  args: {
    type: item.type,
    name: svgNames[0].name,
    src: imageSources[0].src,
    alt: imageSources[0].alt,
    tooltip: svgNames[0].tooltip,  
  },
  argTypes: {
    type: {
      options: ['image', 'svg'],
      control: {
        type: 'radio',
      },
    },
    name: {
      control: {
        type: 'select',
      },
      options: svgNames.map(item => item.name),
      if: { arg: 'type', eq: 'svg' },
    },
    src: {
      control: {
        type: 'select',
      },
      options: imageSources.map(item => item.src),
      if: { arg: 'type', eq: 'image' },
    },
    alt: {
      control: {
        type: 'text',
      },
      if: { arg: 'type', eq: 'image' },
      table: {
        readonly: true,
      },
    },
    tooltip: {
      control: {
        type: 'text',
      },
      table: {
        readonly: true,
      },
    },
  },
  decorators: [
    Story => {
      const [args, updateArgs] = useArgs()

      useEffect(() => {

        if (args.type === 'svg') {
          const svg = data.list.find(item => item.name === args.name)
  
          if (args.name && svg) {
            updateArgs({ tooltip: svg.tooltip })
          }
        }
  
        if (args.type === 'image') {
          const image = data.list.find(item => item.src === args.src)
  
          if (args.src && image) {
            updateArgs({ alt: image.alt, tooltip: image.tooltip })
          }
        }
      }, [args.type, args.name, args.src, updateArgs])

      return (
        <Story />
      )
    }
  ],
}

export default meta
type Story = StoryObj<ProjectsListProps>


export const ProjectsList: Story = {
  render: (args) => {
    return <ProjectsListComponent {...args} />
  },
}
