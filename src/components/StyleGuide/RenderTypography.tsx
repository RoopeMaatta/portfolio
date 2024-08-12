import React, { CSSProperties } from 'react'
import { useTheme } from 'styled-components'
import Table from '../Table/Table'

interface RenderTypographyProps {
  typography: Record<string, React.CSSProperties>
  style?: CSSProperties
}

// Define the data type for typography
interface TypographyData {
  typeset: string
  size: string
  lineHeight: string
}

const RenderTypography: React.FC<RenderTypographyProps> = ({
  typography,
  style,
}) => {
  const theme = useTheme()

  // Mock data
  const data: TypographyData[] = [
    { typeset: 'Body', size: '16px', lineHeight: '24px' },
    { typeset: 'Heading', size: '24px', lineHeight: '32px' },
    { typeset: 'Caption', size: '12px', lineHeight: '16px' },
  ]

  // Columns configuration
  const columns: Array<{ header: string; accessor: keyof TypographyData }> = [
    { header: 'Typeset', accessor: 'typeset' },
    { header: 'Size', accessor: 'size' },
    { header: 'Line height', accessor: 'lineHeight' },
  ]

  return (
    <div style={{ ...style, gridColumn: '1/-1' }}>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default RenderTypography
