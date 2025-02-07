'use client'

import styles from '@/app/page.module.scss'
import Header from '@/components/styleguide/Header'
import Footer from '@/components/styleguide/Footer'
import { Buttons } from '@/components/ui/Button'

import NiceModal from '@ebay/nice-modal-react'
import BasicModal from '@/components/modals/BasicModal'
import BasicModal2 from '@/components/modals/BasicModal2'
import ContactModal from '@/components/modals/ContactModal'

export default function Styleguide() {
  const onTriggerModal = () => {
    NiceModal.show(BasicModal)
  }

  const onTriggerModal2 = () => {
    NiceModal.show(BasicModal2)
  }

  const onTriggerModal3 = () => {
    NiceModal.show(ContactModal)
  }

  const data = {
    buttons: [{
      title: 'Modal 1',
      class: "primary",
      onClick: onTriggerModal
    },{
      title: 'Modal 2',
      class: 'default',
      onClick: onTriggerModal2
    },{
      title: 'Contact',
      class: 'default',
      onClick: onTriggerModal3
    }]
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            {data.buttons && <Buttons data={data.buttons} className={styles.buttons} />}
          </div>
        </div>
      </main>
      <Footer id="footer" />
    </div>
  )
}
