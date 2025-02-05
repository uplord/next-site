import styles from './style.module.scss'

import Modal from '@/components/ui/Modal'
import NiceModal from '@ebay/nice-modal-react'

export const BasicModal = NiceModal.create(() => {
  return (
    <Modal title="Basic Modal Title"
      showFooter={false}
      modalStyles={styles}
    >
      <div>Basic Content</div>
    </Modal>
  )
})
