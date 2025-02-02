import Link from 'next/link'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Svg } from '@/components/utils'

type ButtonData = {
  title?: string
  icon?: string
  class?: string
  link?: string
  target?: string
  onClick?: () => void
}

const generateContent = (data: ButtonData) => (
  data.title || (data.icon && <Svg name={data.icon} width={20} height={20} />)
)

interface ButtonProps {
  data: ButtonData
}

export default function Button ({ data }: ButtonProps) {
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

interface ButtonsProps {
  data: ButtonData[]
  className?: string
}

export function Buttons ({ data, className = '' }: ButtonsProps) {
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
