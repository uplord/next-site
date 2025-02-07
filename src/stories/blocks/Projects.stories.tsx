import type { Meta, StoryObj } from '@storybook/react'
import { default as ProjectsComponent } from '@/components/blocks/Projects'
import { ProjectsProps } from '@/types/section'

import data from '@/data/projects.json'

const meta: Meta<typeof ProjectsComponent> = {
  title: 'Blocks',
  component: ProjectsComponent,
  args: {
    id: 'projects',
    data
  },
}

export default meta
type Story = StoryObj<ProjectsProps>

export const Projects: Story = {}
