import type { Meta, StoryObj } from '@storybook/react'
import { default as BannerComponent } from '@/components/blocks/Banner'
import { BannerProps } from '@/types/section'

import data from '@/data/banner.json'

const meta: Meta<typeof BannerComponent> = {
  title: 'Blocks',
  component: BannerComponent,
  args: {
    id: 'banner',
    title: data.title,
    subtitle: data.subtitle,
    buttons: data.buttons,
    image: data.image,
    hasHeader: false,
  },
}

export default meta
type Story = StoryObj<BannerProps>

export const Banner: Story = {}
