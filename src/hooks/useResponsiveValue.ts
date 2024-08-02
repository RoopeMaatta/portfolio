import { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { debounce } from 'lodash'

const useResponsiveValue = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints

  const getResponsiveValue = useCallback(() => {
    const width = window.innerWidth
    for (let i = breakpoints.length - 1; i >= 0; i--) {
      if (width >= breakpoints[i].minWidthBreakpoint) {
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
