import React, { ReactNode, cloneElement } from 'react'

interface GridChildProps {
  gridColumn?: string
}

const handleSpanPattern = (gridColumn: string, columns: number): string => {
  const match = gridColumn.match(/^span\s(\d+)$/)
  if (match) {
    const spanValue = parseInt(match[1], 10)
    return spanValue > columns ? `span ${columns}` : gridColumn
  }
  return gridColumn
}

const handleStartSpanPattern = (
  gridColumn: string,
  columns: number
): string => {
  const match = gridColumn.match(/^(\d+)\s*\/\s*span\s(\d+)$/)
  if (match) {
    const start = parseInt(match[1], 10)
    const spanValue = parseInt(match[2], 10)
    return start + spanValue - 1 > columns
      ? `${start} / span ${columns - start + 1}`
      : gridColumn
  }
  return gridColumn
}

const handleSpanStartPattern = (gridColumn: string): string => {
  const match = gridColumn.match(/^span\s(\d+)\s*\/\s*(\d+)$/)
  if (match) {
    const spanValue = parseInt(match[1], 10)
    const start = parseInt(match[2], 10)
    return spanValue >= start ? `span ${start - 1} / ${start}` : gridColumn
  }
  return gridColumn
}

const handleStartEndPattern = (gridColumn: string, columns: number): string => {
  const parts = gridColumn.split('/')
  if (parts.length === 2) {
    const start = parseInt(parts[0].trim(), 10)
    const end = parseInt(parts[1].trim(), 10)
    return end - start > columns ? `${start} / ${start + columns}` : gridColumn
  }
  return gridColumn
}

const adjustGridColumn = (gridColumn: string, columns: number): string => {
  let adjustedGridColumn = gridColumn
  adjustedGridColumn = handleSpanPattern(adjustedGridColumn, columns)
  adjustedGridColumn = handleStartSpanPattern(adjustedGridColumn, columns)
  adjustedGridColumn = handleSpanStartPattern(adjustedGridColumn)
  adjustedGridColumn = handleStartEndPattern(adjustedGridColumn, columns)
  return adjustedGridColumn
}

const adjustChildren = (children: ReactNode, columns: number): ReactNode => {
  return React.Children.map(children, child => {
    if (React.isValidElement<GridChildProps>(child)) {
      const { gridColumn } = child.props
      if (gridColumn) {
        const adjustedGridColumn = adjustGridColumn(gridColumn, columns)
        return cloneElement(child, { gridColumn: adjustedGridColumn })
      }
    }
    return child
  })
}

export default adjustChildren
