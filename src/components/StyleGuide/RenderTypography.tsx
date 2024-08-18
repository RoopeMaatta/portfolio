import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import Table from '../Table/Table'
import TableStyle1Wrapper from '../Table/TableStyle1Wrapper'
import styled from 'styled-components'

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

const TextContainer = styled.div`
  grid-column: 1/-1;
`

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

  return (
    <>
      <h1
        style={{
          gridColumn: '1/-1',
          ...theme.typography.h1,
          margin: '20px 0',
        }}
      >
        Typography
      </h1>
      <p
        style={{
          gridColumn: '1/-1',
          ...theme.typography.caption,
          margin: '10px 0',
          fontSize: '12rem',
          lineHeight: '1.2',
        }}
      >
        Ag
      </p>
      <TextContainer>
        <h4 style={{ marginBottom: theme.spacing.xs }}>Figtree typeface</h4>
        <p style={{ color: theme.colors.text.neutral.weak }}>
          ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ abcdefghijklmnopqrstuvxyzåäö 0123456789
        </p>
        <h5
          style={{
            marginTop: theme.spacing.xxxl,
            marginBottom: theme.spacing.xs,
          }}
        >
          Desktop
        </h5>
        <p style={{ color: theme.colors.text.neutral.weak }}>
          Desktop text style use a modified 1.200 – Minor Third scale to help
          ensure sizes are balanced and work well together. This means that
          larger font sizes are created by multiplying smaller ones by 1,2
        </p>
      </TextContainer>

      <TableStyle1Wrapper>
        <Table columns={columns} data={data} />
      </TableStyle1Wrapper>
    </>
  )
}

export default RenderTypography
