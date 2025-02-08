import type { Meta, StoryObj } from '@storybook/react'
import {
  Buttons as ButtonsComponent,
  ButtonsComponentProps,
} from '@/components/ui/Button'

const buttons = [
  {
    title: 'Get in touch',
    link: 'mailto:michael@uplord.co.uk',
    class: 'primary large',
  },
  {
    title: 'Download CV',
    link: '/michael-allen-cv.pdf',
    class: 'link large',
    target: '_blank',
  },
]

const meta: Meta<typeof ButtonsComponent> = {
  title: 'UI/Buttons',
  component: ButtonsComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    data: buttons,
  },
}

export default meta
type Story = StoryObj<ButtonsComponentProps>

export const Buttons: Story = {}
