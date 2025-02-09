import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { Link as LinkComponent, LinkProps } from '@/components/ui/Link'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<typeof LinkComponent> = {
  title: 'UI/Link',
  component: LinkComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Link example',
    href: 'https://themichael.co.uk/',
    target: '_blank',
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
type Story = StoryObj<LinkProps>

export const Link: Story = {}
