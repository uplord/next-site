import styles from './style.module.scss'
import clsx from 'clsx'
import Icon from '@/components/utils/Icon'
import { LinkProps } from '@/types/button'

export function Link({
  label,
  href = '',
  target,
  size,
  variant,
  className = '',
  disabled,
  leadingIcon,
  trailingIcon,
  isLoading = false,
}: LinkProps) {
  return (
    <a
      href={href || ''}
      target={target}
      className={clsx(
        styles.link,
        styles[variant],
        styles[size],
        (disabled || isLoading) && styles.disabled,
        (leadingIcon || trailingIcon) && !label && styles.icon,
        isLoading && styles['is-loading'],
        className
      )}
    >
      {isLoading && (
        <Icon icon="LoaderCircle" size={size} className={styles.loading} />
      )}
      <span className={styles.content}>
        {leadingIcon && <Icon icon={leadingIcon} size={size} />}
        {label}
        {trailingIcon && <Icon icon={trailingIcon} size={size} />}
      </span>
    </a>
  )
}
