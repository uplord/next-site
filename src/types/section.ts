export type DefaultProps = {
  id: string
  queueId?: number
}

export type ButtonProps = {
  title?: string
  icon?: string
  class?: string
  link?: string
  target?: string
  onClick?: () => void
}

export type ImageProps = {
  src: string
  alt: string
  sizes: string
  width: number
  height: number
}

export type BannerProps = DefaultProps & {
  data: {
    title: string
    subtitle: string
    buttons?: ButtonProps[]
    image: ImageProps
  }
}

export type SectionProps = DefaultProps & {
  data: {
    title: string
    subtitle: string
    content: string
    buttons?: ButtonProps[]
    image: ImageProps
  }
}

export type ProjectsListProps = {
  type: string
  name?: string
  src?: string
  alt?: string
  tooltip?: string
}

export type ProjectsProps = DefaultProps & {
  data: {
    title: string
    list: ProjectsListProps[]
  }
}

export type TimelineListProps = {
  title: string
  subtitle: string
  logo: string
  link: string
  content: string
}

export type TimelineProps = DefaultProps & {
  data: {
    title: string
    subtitle: string
    content?: string
    buttons?: ButtonProps[]
    list: TimelineListProps[]
  }
}

export type StackListProps = {
  icon: string
  tooltip: string
}

export type StackProps = DefaultProps & {
  data: {
    title: string
    list: StackListProps[]
  }
}
