import type { Meta, StoryObj } from '@storybook/react';
import { default as SocialComponent } from '@/components/styleguide/Social';

const meta: Meta<typeof SocialComponent> = {
  title: 'Styleguide',
  parameters: {
    layout: 'centered',
  },
  component: SocialComponent,
};

export default meta;
type Story = StoryObj

export const Social: Story = {};
