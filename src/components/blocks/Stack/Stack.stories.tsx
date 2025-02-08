import type { Meta, StoryObj } from '@storybook/react'
import { default as StackComponent } from '@/components/blocks/Stack'
import { StackProps } from '@/types/section'

import data from '@/data/stack.json'

const meta: Meta<typeof StackComponent> = {
  title: 'Blocks',
  component: StackComponent,
  args: {
    id: 'stack',
    title: data.title,
    list: data.list,
  },
}

export default meta
type Story = StoryObj<StackProps>

export const Stack: Story = {}
