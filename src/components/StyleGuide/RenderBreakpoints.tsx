import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'
import useResponsiveValue from '../../hooks/useResponsiveValue'

interface Breakpoint {
  minScreenWidth: number
  columns: number
  gridGap: number
}

const RenderBreakpoints: React.FC = () => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints as Record<string, Breakpoint>

  const formattedBreakpoints = Object.keys(breakpoints).reduce(
    (acc, key) => {
      acc[`${key}`] = breakpoints[key]
      return acc
    },
    {} as Record<string, Breakpoint>
  )

  const renderBreakpointItem = (key: string, value: Breakpoint) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '100px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
      }}
    >
      <span>{key}:</span>
      <div style={{ marginLeft: '10px' }}>
        <div>minScreenWidth: {value.minScreenWidth}px</div>
        <div>columns: {value.columns}</div>
        <div>gridGap: {value.gridGap}px</div>
      </div>
    </div>
  )

  return (
    <RenderBlock
      title='Breakpoints'
      data={formattedBreakpoints}
      renderItem={renderBreakpointItem}
      style={{
        gridColumn: useResponsiveValue(['1/-1', 'span 4', 'span 6']),
      }}
    />
  )
}

export default RenderBreakpoints
