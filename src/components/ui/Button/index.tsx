import Link from 'next/link'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Svg } from '@/components/utils'
import { ButtonProps } from '@/types/section'

const generateContent = (data: ButtonProps) => (
  data.title || (data.icon && <Svg name={data.icon} width={20} height={20} />)
)

export default function Button ({ data }: { data: ButtonProps }) {
  const buttonClasses = clsx(
    styles.button,
    ...data.class?.split(' ').map((name) => styles[name] || '') || []
  )

  const Content = generateContent(data)

  const ButtonComponent = data.link ? (
    <Link href={data.link} className={buttonClasses} target={data.target || undefined}>
      {Content}
    </Link>
  ) : (
    <button type="button" className={buttonClasses} onClick={data.onClick}>
      {Content}
    </button>
  )

  return ButtonComponent
}

export function Buttons ({ data, className = '' }: { data: ButtonProps[]; className?: string }) {
  return (
    <div className={clsx(styles.buttons, className)}>
      {data.map((button) => (
        <Button
          key={button.title || button.icon}
          data={{
            ...button,
            link: button.link || undefined,
            onClick: button.onClick || (() => {}),
          }}
        />
      ))}
    </div>
  )
}
