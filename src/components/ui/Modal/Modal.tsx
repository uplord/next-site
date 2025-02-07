import { useState, useEffect, useCallback, ReactNode } from 'react'
import styles from './style.module.scss'
import { useModal } from '@ebay/nice-modal-react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export type ModalProps = {
  children: ReactNode
  title?: string
  showHeader?: boolean
  showFooter?: boolean
  modalStyles?: { [key: string]: string }
  footer?: ReactNode
  visible?: boolean
  triggerClose?: boolean
  triggerSubmit?: boolean
}

export const Modal = ({
  children,
  title,
  showHeader = true,
  showFooter = true,
  modalStyles = {},
  footer,
  triggerClose = false,
  triggerSubmit = false,
}: ModalProps) => {
  const modal = useModal()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isVisible])

  const onCloseButton = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      modal.remove()
    }, 600)
  }, [modal])

  useEffect(() => {
    if (triggerClose) {
      onCloseButton()
    }
  }, [triggerClose, onCloseButton])

  useEffect(() => {
    if (triggerSubmit) {
      onSubmitButton()
    }
  }, [triggerSubmit])

  const onSubmitButton = () => {
    console.log('onSubmitButton')
  }

  const headerButtons = { 
    icon: X,
    onClick: onCloseButton,
    class: `${styles['buttonClose']}`
  }

  return (
    <div className={`${styles.modal} ${isVisible ? styles.loaded : ''} ${modalStyles.modal || ''}`}>
      <div className={styles.backdrop} onClick={onCloseButton}></div>
      <div className={`${styles.overlay} ${modalStyles.overlay || ''}`}>
        {showHeader && (
          <div className={`${styles.header} ${modalStyles.header || ''}`}>
            <div className={`${styles.title} ${modalStyles.title || ''}`}>
              {title || 'Modal Title'}
            </div>
            <Button data={headerButtons} />
          </div>
        )}
        <div className={styles.scroll}>
          <div className={`${styles.content} ${modalStyles.content || ''}`}>
            {children}
          </div>
        </div>
        {(showFooter && footer) && (
          <div className={`${styles.footer} ${modalStyles.footer || ''}`}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
