import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { Button as ButtonComponent } from '@/components/ui/Button'
import { ButtonProps, Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<typeof ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Button example',
    size: Size.Medium,
    variant: 'primary',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
    },
    className: {
      table: {
        disable: true,
      },
    },
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons | null)[],
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons | null)[],
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Button: Story = {}
