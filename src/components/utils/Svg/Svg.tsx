import React, { Suspense, lazy } from 'react'

type SvgProps = {
  name?: string
  width?: number
  height?: number
  className?: string
  color?: string
}

export const Svg = ({
  name,
  width,
  height,
  className = '',
  color = '',
}: SvgProps) => {
  if (!name) return null

  const SvgIcon = lazy(() =>
    import(`../../../assets/icons/${name}.svg`).catch(() => ({
      default: () => <span>Icon not found</span>,
    }))
  )

  return (
    <Suspense
      fallback={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <path fill="transparent" d={`M0 0h${width}v${height}H0z`}></path>
        </svg>
      }
    >
      <SvgIcon
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        className={className}
        {...(color ? { color } : {})}
      />
    </Suspense>
  )
}
