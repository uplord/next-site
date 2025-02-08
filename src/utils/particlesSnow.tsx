import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadImageShape } from '@tsparticles/shape-image'
import type { MoveDirection, OutMode } from '@tsparticles/engine'

interface ParticlesSnowProps {
  id: string
  className?: string
}

const ParticlesSnow = React.memo(({ id, className }: ParticlesSnowProps) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
      await loadImageShape(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 24,
      particles: {
        color: { value: '#fff' },
        move: {
          direction: 'bottom' as MoveDirection,
          enable: true,
          outModes: 'out' as OutMode,
          speed: 4,
        },
        number: {
          density: {
            enable: true,
            area: 2000,
          },
          value: 100,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: 'image',
          options: {
            image: {
              src: '/snowflake.svg',
              width: 10,
              height: 10,
            },
          },
        },
        size: {
          value: 10,
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 15,
        },
        zIndex: {
          value: { min: 0, max: 60 },
        },
      },
      detectRetina: true,
      style: {
        position: 'absolute',
      },
    }),
    []
  )

  if (!init) {
    return null
  }

  return <Particles id={id} options={options} className={className} />
})

ParticlesSnow.displayName = 'ParticlesSnow'

export default ParticlesSnow
