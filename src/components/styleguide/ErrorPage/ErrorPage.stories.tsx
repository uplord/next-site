import type { Meta, StoryObj } from '@storybook/react'
import { default as ErrorPageComponent } from '@/components/styleguide/ErrorPage'

const meta: Meta<typeof ErrorPageComponent> = {
  title: 'Styleguide',
  component: ErrorPageComponent,
}

export default meta
type Story = StoryObj

export const ErrorPage: Story = {}
