import type { Meta, StoryObj } from '@storybook/react';
import { default as ToggleComponent } from '@/components/ui/Toggle';

const meta: Meta<typeof ToggleComponent> = {
  title: 'UI',
  parameters: {
    layout: 'centered',
  },
  component: ToggleComponent,
};

export default meta;
type Story = StoryObj

export const Toggle: Story = {};
