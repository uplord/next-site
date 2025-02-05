import styles from './style.module.scss'
import { useState, useRef } from 'react'

import Modal from '@/components/ui/Modal'
import NiceModal from '@ebay/nice-modal-react'
import { Buttons } from '@/components/ui/Button'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactModal = NiceModal.create(() => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState('form')
  const [hasFooter, setHasFooter] = useState(true)
  const [isClosed, setIsClosed] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = () => {
    formRef.current?.requestSubmit()
  }

  const onSubmit = async (data: any) => {
    setStatus('success')
    setHasFooter(false)
  }

  const footerButtons = [
    {  
      title: 'Submit',
      onClick: onHandleSubmit,
      class: 'primary right'
    },
  ]

  const successButtons = [
    {  
      title: 'Close',
      onClick: () => setIsClosed(true),
      class: 'primary'
    },
  ]

  return (
    <Modal
      title="Get in touch"
      showFooter={hasFooter}
      triggerClose={isClosed}
      footer={<Buttons data={footerButtons} className={styles.buttons} />}
    >
      {status === 'form' ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete="off"
          noValidate
        >
          <div className={styles.field}>
            <input {...register('fullName')} placeholder="Full name" autoComplete="none" />
            {errors.fullName?.message && <p className={styles.error}>{String(errors.fullName.message)}</p>}
          </div>

          <div className={styles.field}>
            <input {...register('email')} type="email" placeholder="Email address" />
            {errors.email?.message && <p className={styles.error}>{String(errors.email.message)}</p>}
          </div>

          <div className={styles.field}>
            <textarea {...register('message')} rows={4} placeholder="Your message..." />
            {errors.message?.message && <p className={styles.error}>{String(errors.message.message)}</p>}
          </div>
        </form>
      ) : (
        <div className={styles.success}>
          <h3>Thank you</h3>
          <p>I have recieved your message and will be in touch shortly.</p>
          <Buttons data={successButtons} className={styles.buttons} />
        </div>
      )}
    </Modal>
  )
})
