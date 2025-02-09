import type { Meta, StoryObj } from '@storybook/react'
import NiceModal from '@ebay/nice-modal-react'
import NiceModalProvider from '@/context/NiceModalProvider'
import { ButtonGroup, Button } from '@/components/ui/Button'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'
import { default as ModalComponent, ModalProps } from '@/components/ui/Modal'

const meta: Meta<typeof ModalComponent> = {
  title: 'UI',
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

type Story = StoryObj<ModalProps>

const TempModal = NiceModal.create<ModalProps>(({ children, ...props }) => {
  return <ModalComponent {...props}>{children}</ModalComponent>
})

export const Modal: Story = {
  args: {
    children: <h1>Page Test</h1>,
    title: 'Test',
    footer: (
      <ButtonGroup>
        <Button label="Submit" size={Size.Large} variant={Variant.Primary} />
      </ButtonGroup>
    ),
  },
  render: (args) => {
    const onTriggerModal = () => {
      NiceModal.show(TempModal, args)
    }

    return (
      <ButtonGroup>
        <Button
          label="UI modal"
          size={Size.Large}
          variant={Variant.Primary}
          onClick={onTriggerModal}
        />
      </ButtonGroup>
    )
  },
}
