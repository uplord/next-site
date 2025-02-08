import { ElementType } from 'react'

export type DefaultProps = {
  id: string
}

export type ButtonProps = {
  title?: string
  icon?: string | ElementType
  class?: string
  link?: string
  target?: string
  onClick?: (() => void) | string
  disabled?: boolean
}

export type ImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}

export type BannerProps = DefaultProps & {
  title: string
  subtitle: string
  buttons?: ButtonProps[]
  image: ImageProps
  hasHeader?: boolean
  hasParticles?: boolean
}

export type SectionProps = DefaultProps & {
  title: string
  subtitle: string
  content: string
  buttons?: ButtonProps[]
  image: ImageProps
}

export type ProjectsListProps = {
  type: string
  name?: string
  src?: string
  alt?: string
  tooltip?: string
}

export type ProjectsProps = DefaultProps & {
  title: string
  list: ProjectsListProps[]
}

export type TimelineListProps = {
  title: string
  subtitle: string
  link: string
  content: string
  icon: {
    name: string
    width: number
    height: number
  }
}

export type TimelineProps = DefaultProps & {
  title: string
  subtitle: string
  content?: string
  buttons?: ButtonProps[]
  list: TimelineListProps[]
  hasHeader?: boolean
}

export type StackListProps = {
  icon: string
  tooltip: string
}

export type StackProps = DefaultProps & {
  title: string
  list: StackListProps[]
}
