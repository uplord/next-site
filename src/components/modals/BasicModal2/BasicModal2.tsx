import styles from './style.module.scss'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import NiceModal from '@ebay/nice-modal-react'
import { Buttons } from '@/components/ui/Button'

export const BasicModal2 = NiceModal.create(() => {
  const [isClosed, setIsClosed] = useState(false)

  const onHandleClose = () => {
    setIsClosed(true)
  }

  const buttons = [
    {
      title: 'Close',
      onClick: onHandleClose,
      class: 'primary',
    },
  ]

  return (
    <Modal
      showHeader={false}
      modalStyles={styles}
      triggerClose={isClosed}
      footer={<Buttons data={buttons} className={styles.buttons} />}
    >
      <p>Basic Content 2</p>
      <p>Add custom footer with buttons</p>
    </Modal>
  )
})
