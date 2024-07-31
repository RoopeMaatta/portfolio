import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'

interface Breakpoint {
  minWidthBreakpoint: number
  columns: number
  gridGap: number
}

const RenderBreakpoints: React.FC = () => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints as Breakpoint[]

  const formattedBreakpoints: Record<string, Breakpoint> = breakpoints.reduce(
    (acc, breakpoint, index) => {
      acc[`Breakpoint ${index + 1}`] = breakpoint
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
        gridTemplateColumns: '200px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
      }}
    >
      <span>{key}:</span>
      <div style={{ marginLeft: '10px' }}>
        <div>Min Width: {value.minWidthBreakpoint}px</div>
        <div>Columns: {value.columns}</div>
        <div>Grid Gap: {value.gridGap}px</div>
      </div>
    </div>
  )

  return (
    <RenderBlock
      title='Breakpoints'
      data={formattedBreakpoints}
      renderItem={renderBreakpointItem}
    />
  )
}

export default RenderBreakpoints
