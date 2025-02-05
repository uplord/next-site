import Link from 'next/link'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Svg } from '@/components/utils'
import { ButtonProps } from '@/types/section'

interface ButtonComponentProps {
  data: ButtonProps
  functionMap?: { [key: string]: Function }
}

const generateContent = (data: ButtonProps) => {
  if (data.title) return data.title

  if (typeof data.icon === 'string') {
    return <Svg name={data.icon} width={20} height={20} />
  }

  if (typeof data.icon === 'object' && data.icon !== null) {
    const Icon = data.icon as React.ElementType
    return <Icon size={20} />
  }

  return null
}

export function Button({ data, functionMap }: ButtonComponentProps) {
  const buttonClasses = clsx(
    styles.button,
    data.icon && styles.icon,
    ...data.class?.split(' ').map((name) => styles[name] || name || '') || []
  )

  const Content = generateContent(data)

  const handleClick = () => {
    if (typeof data.onClick === 'string' && functionMap && functionMap[data.onClick]) {
      functionMap[data.onClick]()
    } else if (typeof data.onClick === 'function') {
      data.onClick()
    }
  }

  const ButtonComponent = data.link ? (
    <Link href={data.link} className={buttonClasses} target={data.target || undefined}>
      {Content}
    </Link>
  ) : (
    <button type="button" className={buttonClasses} onClick={handleClick} disabled={data.disabled}>
      {Content}
    </button>
  )

  return ButtonComponent
}

interface ButtonsComponentProps {
  data: ButtonProps[]
  className?: string
  functionMap?: { [key: string]: Function }
}

export function Buttons({ data, className = '', functionMap }: ButtonsComponentProps) {
  return (
    <div className={clsx(styles.buttons, className)}>
      {data.map((button, index) => (
        <Button
          key={index}
          data={{
            ...button,
            link: button.link || undefined,
            onClick: button.onClick || (() => {}),
          }}
          functionMap={functionMap}
        />
      ))}
    </div>
  )
}
