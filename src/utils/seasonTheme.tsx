import { useState, useEffect } from 'react'

export { default as ParticlesSnow } from './particlesSnow'
export { default as ParticlesDefault } from './particlesDefault'

export function useSeason(): 'xmas' | 'winter' | 'default' {
  const [season, setSeason] = useState<'xmas' | 'winter' | 'default'>('default')

  useEffect(() => {
    const today = new Date()
    const isXmasSeason =
      today.getMonth() === 11 && today.getDate() >= 1 && today.getDate() <= 25

    const isWinterSeason =
      today.getMonth() === 11 && today.getDate() >= 1 && today.getDate() <= 31

    if (isXmasSeason) {
      setSeason('xmas')
    } else if (isWinterSeason) {
      setSeason('winter')
    } else {
      setSeason('default')
    }
  }, [])

  return season
}
