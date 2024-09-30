import { useEffect, useMemo } from 'react'
import { useWindowSizeContext } from '../contexts/WindowSizeContext'
import breakpointsData from '../themes/breakpoints.json' // Import the breakpoints JSON

type Breakpoint = {
  minScreenWidth: number
  columns: number
  gridGap: number
}

type Breakpoints = {
  [key: string]: Breakpoint
}

const breakpoints = breakpointsData as Breakpoints

const useResponsiveValue = <T>(values: T[]): T => {
  const { windowWidth } = useWindowSizeContext()
  const sortedBreakpointKeys = useMemo(
    () =>
      Object.keys(breakpoints).sort(
        (a, b) => breakpoints[a].minScreenWidth - breakpoints[b].minScreenWidth
      ),
    []
  )

  useEffect(() => {
    if (values.length !== sortedBreakpointKeys.length) {
      console.warn(
        `Warning: The number of values (${values.length}) does not match the number of breakpoints (${sortedBreakpointKeys.length}).`
      )
    }
  }, [values, sortedBreakpointKeys])

  const adjustedValues = useMemo(() => {
    if (values.length >= sortedBreakpointKeys.length) {
      return values.slice(0, sortedBreakpointKeys.length)
    }
    const lastValue = values[values.length - 1]
    return [
      ...values,
      ...new Array(sortedBreakpointKeys.length - values.length).fill(lastValue),
    ]
  }, [values, sortedBreakpointKeys])

  const responsiveValue = useMemo(() => {
    for (let i = sortedBreakpointKeys.length - 1; i >= 0; i--) {
      const key = sortedBreakpointKeys[i]
      if (windowWidth >= breakpoints[key].minScreenWidth) {
        return adjustedValues[i]
      }
    }
    return adjustedValues[0]
  }, [windowWidth, adjustedValues, sortedBreakpointKeys])

  return responsiveValue
}

export default useResponsiveValue
