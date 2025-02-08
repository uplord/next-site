import type { Meta, StoryObj } from '@storybook/react'
import {
  default as HeaderComponent,
  HeaderProps,
} from '@/components/styleguide/Header'

const meta: Meta<typeof HeaderComponent> = {
  title: 'Styleguide',
  component: HeaderComponent,
  args: {
    className: '',
    isHomepage: false,
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<HeaderProps>

export const Header: Story = {}
