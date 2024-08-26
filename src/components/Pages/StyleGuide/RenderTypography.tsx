import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import Table from '../../Atoms/Table/Table'
import TableStyle1Wrapper from '../../Atoms/Table/TableStyle1Wrapper'
import { Spacer } from '../../Atoms/Spacer'
import { getTheme } from '../../../themes/getTheme'
import { ContainerFullWidth } from '../../Atoms/ContainerFullWidth'

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
interface TableColumn<T> {
  header: string
  accessor: keyof T
  render?: (value: string) => React.ReactNode
}

const RenderTypography: React.FC = () => {
  const theme = useTheme()
  const themeTypographySmallScreen = getTheme(false, true).typography
  const themeTypographyLargeScreen = getTheme(false, false).typography

  // Function to extract typography data
  const getTypographyData = (
    typography: typeof theme.typography
  ): TypographyData[] => {
    return Object.keys(typography).map(key => {
      const typestyle = typography[
        key as keyof typeof typography
      ] as TypographyStyle
      return {
        typeset: key,
        size: typestyle?.fontSize || 'N/A',
        lineHeight: typestyle?.lineHeight || 'N/A',
      }
    })
  }

  // Use the function for small and large screen typography
  const dataSmallScreen = useMemo(
    () => getTypographyData(themeTypographySmallScreen),
    [themeTypographySmallScreen]
  )
  const dataLargeScreen = useMemo(
    () => getTypographyData(themeTypographyLargeScreen),
    [themeTypographyLargeScreen]
  )

  // Function to generate columns configuration
  const getColumnsConfig = (
    typography: typeof theme.typography
  ): TableColumn<TypographyData>[] => {
    return [
      {
        header: 'Typeset',
        accessor: 'typeset',
        render: (value: string) => {
          const style = typography[
            value as keyof typeof typography
          ] as TypographyStyle
          return <span style={{ ...style }}>{value}</span>
        },
      },
      { header: 'Size', accessor: 'size' },
      { header: 'Line height', accessor: 'lineHeight' },
    ]
  }

  const columnsSmallScreen = useMemo(
    () => getColumnsConfig(themeTypographySmallScreen),
    [themeTypographySmallScreen]
  )
  const columnsLargeScreen = useMemo(
    () => getColumnsConfig(themeTypographyLargeScreen),
    [themeTypographyLargeScreen]
  )

  return (
    <>
      <ContainerFullWidth>
        <h1>Typography</h1>

        <Spacer height={'040px'} />
        <p
          style={{
            ...theme.typography.tiny,
            fontSize: '12rem',
            lineHeight: '1.2',
          }}
        >
          Ag
        </p>
        <Spacer height={'008px'} />
        <h4>Figtree typeface</h4>
        <Spacer height={'008px'} />
        <p style={{ color: theme.colors.text.neutral.weak }}>
          ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ <br />
          abcdefghijklmnopqrstuvxyzåäö <br />
          0123456789 <br />
        </p>
        <Spacer height={'080px'} />
        <h4>Desktop</h4>
        <Spacer height={'008px'} />
        <p style={{ color: theme.colors.text.neutral.weak }}>
          Desktop text style use a modified 1.200 – Minor Third scale to help
          ensure sizes are balanced and work well together. This means that
          larger font sizes are created by multiplying smaller ones by 1,2
        </p>

        <Spacer height={'040px'} />

        <TableStyle1Wrapper>
          <Table columns={columnsLargeScreen} data={dataLargeScreen} />
        </TableStyle1Wrapper>

        <Spacer height={'064px'} />

        <h4>Mobile</h4>
        <Spacer height={'008px'} />
        <p style={{ color: theme.colors.text.neutral.weak }}>
          Largest sizes have been reduced to make the most of smaller screen
          size. This also helps for not wrapping text on multiple lines.
        </p>
        <Spacer height={'040px'} />

        <TableStyle1Wrapper>
          <Table columns={columnsSmallScreen} data={dataSmallScreen} />
        </TableStyle1Wrapper>
        <Spacer height={'080px'} />
      </ContainerFullWidth>
    </>
  )
}

export default RenderTypography
