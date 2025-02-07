import type { Meta } from '@storybook/react'

import { Test, TestProps } from '@/components/Test'

const meta = {
  title: 'Test',
  component: Test,
  args: {
    id: 1
  },
  decorators: [
    Story => (
      <div className="Testing123">
        <Story />
      </div>
    )
  ],
} satisfies Meta<TestProps> 

export default meta

export const Test1 = (args: TestProps) => <Test {...args} />