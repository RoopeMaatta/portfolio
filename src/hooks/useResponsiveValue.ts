import { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { debounce } from 'lodash'

type Breakpoints = {
  [key: string]: {
    minScreenWidth: number
    columns: number
    gridGap: number
  }
}

const useResponsiveValue = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints as Breakpoints

  const getResponsiveValue = useCallback(() => {
    const width = window.innerWidth
    const breakpointKeys = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[a].minScreenWidth - breakpoints[b].minScreenWidth
    )

    for (let i = breakpointKeys.length - 1; i >= 0; i--) {
      const key = breakpointKeys[i]
      if (width >= breakpoints[key].minScreenWidth) {
        return values[i]
      }
    }
    throw new Error('No matching breakpoints found for the given width')
  }, [values, breakpoints])

  const [responsiveValue, setResponsiveValue] = useState<T>(getResponsiveValue)

  useEffect(() => {
    const handleResize = debounce(() => {
      setResponsiveValue(getResponsiveValue())
    }, 100)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getResponsiveValue])

  return responsiveValue
}

export default useResponsiveValue
