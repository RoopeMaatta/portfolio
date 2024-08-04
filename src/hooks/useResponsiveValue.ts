import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { useTheme } from 'styled-components'
import { debounce } from 'lodash'

type Breakpoint = {
  minScreenWidth: number
  columns: number
  gridGap: number
}

type Breakpoints = {
  [key: string]: Breakpoint
}

const useResponsiveValue = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = useMemo(() => theme.breakpoints as Breakpoints, [theme])

  const breakpointKeys = useMemo(
    () =>
      Object.keys(breakpoints).sort(
        (a, b) => breakpoints[a].minScreenWidth - breakpoints[b].minScreenWidth
      ),
    [breakpoints]
  )

  useEffect(() => {
    if (values.length !== breakpointKeys.length) {
      console.warn(
        `Warning: The number of values (${values.length}) does not match the number of breakpoints (${breakpointKeys.length}).`
      )
    }
  }, [values, breakpointKeys])

  const adjustedValues = useMemo(() => {
    const adjusted = values.slice(0, breakpointKeys.length)
    if (values.length < breakpointKeys.length) {
      return [
        ...adjusted,
        ...new Array(breakpointKeys.length - values.length).fill(
          values[values.length - 1]
        ),
      ]
    }
    return adjusted
  }, [values, breakpointKeys])

  const getResponsiveValue = useCallback(() => {
    const width = window.innerWidth

    for (let i = breakpointKeys.length - 1; i >= 0; i--) {
      const key = breakpointKeys[i]
      if (width >= breakpoints[key].minScreenWidth) {
        return adjustedValues[i]
      }
    }

    return adjustedValues[0]
  }, [adjustedValues, breakpoints, breakpointKeys])

  const [responsiveValue, setResponsiveValue] = useState<T>(getResponsiveValue)

  const handleResize = useRef(
    debounce(() => {
      const newValue = getResponsiveValue()
      setResponsiveValue(prevValue =>
        prevValue !== newValue ? newValue : prevValue
      )
    }, 100)
  ).current

  useEffect(() => {
    const resizeListener = handleResize

    window.addEventListener('resize', resizeListener)
    setResponsiveValue(getResponsiveValue())

    return () => {
      window.removeEventListener('resize', resizeListener)
      handleResize.cancel()
    }
  }, [handleResize, getResponsiveValue])

  return responsiveValue
}

export default useResponsiveValue
