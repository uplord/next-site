import type { Meta, StoryObj } from '@storybook/react'
import { Button as ButtonComponent, ButtonProps } from '@/components/ui/Button2'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

const meta: Meta<typeof ButtonComponent> = {
  title: 'UI/ButtonNew',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Button',
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
      }
    },
    leadingIcon: {
      table: {
        disable: true,
      }
    },
    trailingIcon: {
      table: {
        disable: true,
      }
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const ButtonsNew: Story = {}
