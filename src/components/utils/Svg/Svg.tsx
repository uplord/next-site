import React from 'react'

type SvgProps = {
  name?: string
  width?: number
  height?: number
  className?: string
  color?: string
}

export const Svg = ({
  name,
  width = undefined,
  height = undefined, 
  className = '',
  color = ''
}: SvgProps) => {
  const SvgIcon = require(`@/assets/icons/${name}.svg`).default

  return (
    <SvgIcon
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      className={className}
      {...(color ? { color } : {})}
    />
  )
}
