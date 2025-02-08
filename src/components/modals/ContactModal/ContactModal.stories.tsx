import type { Meta, StoryObj } from '@storybook/react'
import NiceModal from '@ebay/nice-modal-react'
import NiceModalProvider from '@/context/NiceModalProvider'
import { Buttons } from '@/components/ui/Button'
import { default as ModalComponent } from '@/components/modals/ContactModal'

const meta: Meta<typeof ModalComponent> = {
  title: 'Modal',
  parameters: {
    layout: 'centered',
  },
  component: ModalComponent,
  decorators: [
    (Story) => (
      <NiceModalProvider>
        <Story />
      </NiceModalProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

export const ContactModal: Story = {
  render: () => {
    const onTriggerModal = () => {
      NiceModal.show(ModalComponent)
    }

    const data = {
      buttons: [
        {
          title: 'Contact form modal',
          class: 'primary large',
          onClick: onTriggerModal,
        },
      ],
    }

    return <Buttons data={data.buttons} />
  },
}
