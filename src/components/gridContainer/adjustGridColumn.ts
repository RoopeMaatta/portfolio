import { CSSProperties } from 'react'

export function adjustGridColumn(
  style: CSSProperties | undefined,
  maxColumns: number
): CSSProperties {
  if (!style) return { gridColumn: `span ${maxColumns}` }
  const gridColumn = style.gridColumn

  if (typeof gridColumn === 'string') {
    const spanMatch = gridColumn.match(/span (\d+)/)
    if (spanMatch) {
      const spanValue = parseInt(spanMatch[1], 10)
      if (spanValue > maxColumns) {
        return { ...style, gridColumn: `span ${maxColumns}` }
      }
    }
  }

  return style
}
