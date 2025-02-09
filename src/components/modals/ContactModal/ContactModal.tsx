import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Modal from '@/components/ui/Modal'
import NiceModal from '@ebay/nice-modal-react'
import { ButtonGroup, Button } from '@/components/ui/Button'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

import styles from './style.module.scss'

const schema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactModal = NiceModal.create(() => {
  const [status, setStatus] = useState('form')
  const [hasFooter, setHasFooter] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onHandleSubmit = () => {
    setIsDisabled(true)

    handleSubmit(
      async (data) => {
        await onSubmit(data)
      },
      (errors) => {
        if (Object.keys(errors).length > 0) {
          setTimeout(() => {
            setIsDisabled(false)
          }, 600)
        }
      }
    )()
  }

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsDisabled(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setHasFooter(false)
    } catch (error) {
      console.error(error)
      alert('Something went wrong, please try again.')
    } finally {
      setIsDisabled(false)
    }
  }

  return (
    <Modal
      title="Get in touch"
      showFooter={hasFooter}
      modalStyles={styles}
      triggerClose={isClosed}
      footer={
        <ButtonGroup className={styles.buttons}>
          <Button
            label="Submit"
            size={Size.Large}
            variant={Variant.Primary}
            disabled={isDisabled}
            onClick={onHandleSubmit}
          />
        </ButtonGroup>
      }
    >
      {status === 'form' ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete="off"
          noValidate
        >
          <div className={styles.field}>
            <input
              {...register('fullName')}
              placeholder="Full name"
              autoComplete="none"
            />
            {errors.fullName?.message && (
              <p className={styles.error}>{String(errors.fullName.message)}</p>
            )}
          </div>

          <div className={styles.field}>
            <input
              {...register('email')}
              type="email"
              placeholder="Email address"
            />
            {errors.email?.message && (
              <p className={styles.error}>{String(errors.email.message)}</p>
            )}
          </div>

          <div className={styles.field}>
            <textarea
              {...register('message')}
              rows={4}
              placeholder="Your message..."
            />
            {errors.message?.message && (
              <p className={styles.error}>{String(errors.message.message)}</p>
            )}
          </div>
        </form>
      ) : (
        <div className={styles.success}>
          <h3>Thank you</h3>
          <p>I have recieved your message and will be in touch shortly.</p>
          <ButtonGroup className={styles.buttons}>
            <Button
              label="Close"
              size={Size.Large}
              variant={Variant.Primary}
              onClick={() => setIsClosed(true)}
            />
          </ButtonGroup>
        </div>
      )}
    </Modal>
  )
})
