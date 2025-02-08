import type { Meta, StoryObj } from '@storybook/react'
import { default as TimelineComponent } from '@/components/blocks/Timeline'
import { TimelineProps } from '@/types/section'

import data from '@/data/timeline.json'

const meta: Meta<typeof TimelineComponent> = {
  title: 'Blocks',
  component: TimelineComponent,
  args: {
    id: 'timeline',
    title: data.title,
    subtitle: data.subtitle,
    content: data.content,
    buttons: data.buttons,
    list: data.list,
    hasHeader: false,
  },
}

export default meta
type Story = StoryObj<TimelineProps>

export const Timeline: Story = {}
