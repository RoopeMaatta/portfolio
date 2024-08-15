import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import Table from '../Table/Table'
import TableStyle1Wrapper from '../Table/TableStyle1Wrapper'

// Define the typography style type based on theme's typography structure
interface TypographyStyle {
  fontSize: string
  lineHeight: string
}

// Define the data type for typography
interface TypographyData {
  typeset: string
  size: string
  lineHeight: string
}

const RenderTypography: React.FC = () => {
  const theme = useTheme()

  // Extract the typography data from the theme
  const data: TypographyData[] = useMemo(() => {
    return Object.keys(theme.typography).map(key => {
      const typestyle = theme.typography[
        key as keyof typeof theme.typography
      ] as TypographyStyle
      return {
        typeset: key,
        size: typestyle?.fontSize || 'N/A',
        lineHeight: typestyle?.lineHeight || 'N/A',
      }
    })
  }, [theme.typography])

  // Columns configuration
  const columns: Array<{
    header: string
    accessor: keyof TypographyData
    render?: (value: string) => React.ReactNode
  }> = useMemo(
    () => [
      {
        header: 'Typeset',
        accessor: 'typeset',
        render: (value: string) => {
          const style = theme.typography[
            value as keyof typeof theme.typography
          ] as TypographyStyle

          return <span style={{ ...style }}>{value}</span>
        },
      },
      { header: 'Size', accessor: 'size' },
      { header: 'Line height', accessor: 'lineHeight' },
    ],
    [theme.typography]
  )
  console.log(`${theme.stroke.default} ${theme.colors.stroke.neutral.weak}`)
  return (
    <TableStyle1Wrapper>
      <Table columns={columns} data={data} />
    </TableStyle1Wrapper>
  )
}

export default RenderTypography
