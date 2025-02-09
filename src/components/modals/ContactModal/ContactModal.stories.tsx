import type { Meta, StoryObj } from '@storybook/react'
import NiceModal from '@ebay/nice-modal-react'
import NiceModalProvider from '@/context/NiceModalProvider'
import { ButtonGroup, Button } from '@/components/ui/Button'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'
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

    return (
      <ButtonGroup>
        <Button
          label="Contact form modal"
          size={Size.Large}
          variant={Variant.Primary}
          onClick={onTriggerModal}
        />
      </ButtonGroup>
    )
  },
}
