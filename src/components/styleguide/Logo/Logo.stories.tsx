import type { Meta, StoryObj } from '@storybook/react'
import { default as LogoComponennt, LogoProps } from '@/components/styleguide/Logo'

const meta: Meta<typeof LogoComponennt> = {
  title: 'Styleguide',
  parameters: {
    layout: 'centered',
  },
  component: LogoComponennt,
  args: {
    className: '',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta;
type Story = StoryObj<LogoProps>

export const Logo: Story = {}
