import React, { ReactNode, cloneElement } from 'react'

interface GridChildProps {
  gridColumn?: string
}

const adjustChildren = (children: ReactNode, columns: number): ReactNode => {
  return React.Children.map(children, child => {
    if (React.isValidElement<GridChildProps>(child)) {
      const { gridColumn } = child.props
      if (gridColumn) {
        let adjustedGridColumn = gridColumn

        // Regular expression to match different gridColumn formats
        const spanPattern = /^span\s(\d+)$/
        const startSpanPattern = /^(\d+)\s*\/\s*span\s(\d+)$/
        const spanStartPattern = /^span\s(\d+)\s*\/\s*(\d+)$/

        if (spanPattern.test(gridColumn)) {
          // Handle "span X" format
          const match = gridColumn.match(spanPattern)
          if (match) {
            const spanValue = parseInt(match[1], 10)
            if (spanValue > columns) {
              adjustedGridColumn = `span ${columns}`
            }
          }
        } else if (startSpanPattern.test(gridColumn)) {
          // Handle "start / span X" format
          const match = gridColumn.match(startSpanPattern)
          if (match) {
            const start = parseInt(match[1], 10)
            const spanValue = parseInt(match[2], 10)
            if (start + spanValue - 1 > columns) {
              adjustedGridColumn = `${start} / span ${columns - start + 1}`
            }
          }
        } else if (spanStartPattern.test(gridColumn)) {
          // Handle "span X / start" format
          const match = gridColumn.match(spanStartPattern)
          if (match) {
            const spanValue = parseInt(match[1], 10)
            const start = parseInt(match[2], 10)
            if (spanValue >= start) {
              adjustedGridColumn = `span ${start - 1} / ${start}`
            }
          }
        } else {
          // Handle "start / end" format
          const parts = gridColumn.split('/')
          if (parts.length === 2) {
            const start = parseInt(parts[0].trim(), 10)
            const end = parseInt(parts[1].trim(), 10)
            if (end - start > columns) {
              adjustedGridColumn = `${start} / ${start + columns}`
            }
          }
        }

        return cloneElement(child, { gridColumn: adjustedGridColumn })
      }
    }
    return child
  })
}

export default adjustChildren
