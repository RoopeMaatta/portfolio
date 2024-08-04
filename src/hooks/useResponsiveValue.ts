import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { useTheme } from 'styled-components'

type Breakpoints = {
  [key: string]: {
    minScreenWidth: number
    columns: number
    gridGap: number
  }
}

const useResponsiveValue = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = useMemo(() => theme.breakpoints as Breakpoints, [theme])

  const checkAndAdjustValues = useCallback(
    (values: T[], breakpointKeys: string[]) => {
      let adjustedValues = values

      if (values.length !== breakpointKeys.length) {
        console.warn(
          `Warning: Mismatch between the number of breakpoints (${breakpointKeys.length}) and the number of provided values (${values.length}). Adjusting values accordingly.`
        )
        if (values.length < breakpointKeys.length) {
          adjustedValues = [
            ...values,
            ...new Array(breakpointKeys.length - values.length).fill(
              values[values.length - 1]
            ),
          ]
        } else {
          adjustedValues = values.slice(0, breakpointKeys.length)
        }
      }

      return adjustedValues
    },
    []
  )

  const getResponsiveValue = useCallback(() => {
    const width = window.innerWidth
    const breakpointKeys = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[a].minScreenWidth - breakpoints[b].minScreenWidth
    )

    const adjustedValues = checkAndAdjustValues(values, breakpointKeys)

    for (let i = breakpointKeys.length - 1; i >= 0; i--) {
      const key = breakpointKeys[i]
      if (width >= breakpoints[key].minScreenWidth) {
        return adjustedValues[i]
      }
    }

    return adjustedValues[0]
  }, [values, breakpoints, checkAndAdjustValues])

  const [responsiveValue, setResponsiveValue] = useState<T>(() =>
    getResponsiveValue()
  )

  const previousWidth = useRef(window.innerWidth)

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth
    if (currentWidth !== previousWidth.current) {
      previousWidth.current = currentWidth
      setResponsiveValue(getResponsiveValue())
    }
  }, [getResponsiveValue])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return responsiveValue
}

export default useResponsiveValue
