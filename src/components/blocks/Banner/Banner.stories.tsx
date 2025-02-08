import type { Meta, StoryObj } from '@storybook/react'
import { default as BannerComponent } from '@/components/blocks/Banner'
import { BannerProps } from '@/types/section'
import { default as HeaderComponent } from '@/components/styleguide/Header'

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
    hasParticles: true,
  },
}

export default meta
type Story = StoryObj<BannerProps>

export const Banner: Story = {
  render: (args: BannerProps) => {
    return (
      <>
        {args.hasHeader && <HeaderComponent isHomepage={args.hasHeader} />}
        <BannerComponent {...args} />
      </>
    )
  }
}
