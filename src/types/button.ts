import { SizeType } from './size'
import * as icons from 'lucide-react'
type AvailableIcons = keyof typeof icons

export enum Variant {
  Text = 'text',
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
}

export interface ButtonProps {
  label?: string
  size: SizeType | string
  variant: string
  className?: string
  disabled?: boolean
  leadingIcon?: AvailableIcons
  trailingIcon?: AvailableIcons
  isLoading?: boolean
  onClick?: () => void
}

export interface LinkProps {
  label?: string
  href: string
  target?: string
  size: SizeType | string
  variant: string
  className?: string
  disabled?: boolean
  leadingIcon?: AvailableIcons
  trailingIcon?: AvailableIcons
  isLoading?: boolean
}
