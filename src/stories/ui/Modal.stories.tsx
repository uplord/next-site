import type { Meta, StoryObj } from '@storybook/react';
import NiceModal from '@ebay/nice-modal-react'
import NiceModalProvider from '@/context/NiceModalProvider'
import { Buttons } from '@/components/ui/Button'
import { default as ModalComponent, ModalProps } from '@/components/ui/Modal'

const meta: Meta<typeof ModalComponent> = {
  title: 'UI',
  parameters: {
    layout: 'centered',
  },
  component: ModalComponent,
  decorators: [
    Story => (
      <NiceModalProvider>
        <Story />
      </NiceModalProvider>
    )
  ]
}

export default meta;

type Story = StoryObj<ModalProps>

const TempModal = NiceModal.create(({children, ...props}: any) => {
  return <ModalComponent {...props}>{children}</ModalComponent>
})

const footerButtons = [{
  title: 'Submit',
  class: 'primary right'
}]

export const Modal: Story = {
  args: {
    children: <h1>Page Test</h1>,
    title: 'Test',
    footer: <Buttons data={footerButtons} />
  },
  render: (args) => {
    const onTriggerModal = () => {
      NiceModal.show(TempModal, args)
    }

    const data = {
      buttons: [{
        title: 'Contact form modal',
        class: 'primary large',
        onClick: onTriggerModal
      }]
    }

    return (
      <Buttons data={data.buttons} />
    )
  }
}
