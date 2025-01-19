type BreakpointKey = 'sm' | 'md' | 'lg'

const BREAKPOINTS: Record<BreakpointKey, number> = {
  sm: 400,
  md: 744,
  lg: 1024,
}

export const useBreakpoints = (): Record<BreakpointKey, number> => {
  return BREAKPOINTS
}

export const mediaQuery = (key: BreakpointKey): string => {
  const minWidth = BREAKPOINTS[key]
  return `@media (min-width: ${minWidth}px)`
}

export const isBreakpoint = (key: BreakpointKey): boolean => {
  if (typeof window === 'undefined') {
    return false
  }

  const minWidth = BREAKPOINTS[key]
  return window.innerWidth >= minWidth
}

export const getCurrentBreakpoint = (): BreakpointKey | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const width = window.innerWidth;
  return (Object.keys(BREAKPOINTS) as BreakpointKey[])
    .reverse()
    .find((key) => width >= BREAKPOINTS[key]) || null
}
