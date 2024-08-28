import React from 'react' // Import React to use JSX
import { TableColumn, TypographyData, TypographyStyle } from './types'

// Function to generate columns configuration
export const getColumnsConfig = (
  typography: Record<string, TypographyStyle>
): TableColumn<TypographyData>[] => {
  return [
    {
      header: 'Typeset',
      accessor: 'typeset',
      render: (value: string) => {
        const style = typography[value] as React.CSSProperties
        return <span style={style}>{value}</span>
      },
    },
    { header: 'Size', accessor: 'size' },
    { header: 'Line height', accessor: 'lineHeight' },
  ]
}
