import type { Meta, StoryObj } from '@storybook/react';
import { default as FooterComponent } from '@/components/styleguide/Footer';
import { DefaultProps } from '@/types/section'

const meta: Meta<typeof FooterComponent> = {
  title: 'Styleguide',
  component: FooterComponent,
};

export default meta;
type Story = StoryObj<DefaultProps>;

export const Footer: Story = {};
