import type { Meta, StoryObj } from '@storybook/react'
import { default as SectionComponent } from '@/components/blocks/Section'
import { SectionProps } from '@/types/section'

import data from '@/data/section.json'

const meta: Meta<typeof SectionComponent> = {
  title: 'Blocks',
  component: SectionComponent,
  args: {
    id: 'section',
    title: data.title,
    subtitle: data.subtitle,
    content: data.content,
    buttons: data.buttons,
    image: data.image,
  },
}

export default meta
type Story = StoryObj<SectionProps>

export const Section: Story = {}
