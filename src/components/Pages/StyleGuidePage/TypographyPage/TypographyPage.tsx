import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import Table from '../../../Molecules/Table/Table'
import TableStyle1Wrapper from '../../../Molecules/Table/TableStyle1Wrapper'
import { Spacer } from '../../../Atoms/Spacer'
import { getTheme } from '../../../../themes/getTheme'
import { getTypographyData } from './getTypographyData'
import { getColumnsConfig } from './getColumnsConfig'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'

const TypographyPage: React.FC = () => {
  const theme = useTheme()
  const themeTypographySmallScreen = getTheme(false, true).typography
  const themeTypographyLargeScreen = getTheme(false, false).typography

  // Use the function for small and large screen typography
  const dataSmallScreen = useMemo(
    () => getTypographyData(themeTypographySmallScreen),
    [themeTypographySmallScreen]
  )
  const dataLargeScreen = useMemo(
    () => getTypographyData(themeTypographyLargeScreen),
    [themeTypographyLargeScreen]
  )

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

      <H4TitleContentBlock
        title='Desktop'
        description='Desktop text style use a modified 1.200 – Minor Third scale to help
        ensure sizes are balanced and work well together. This means that larger
        font sizes are created by multiplying smaller ones by 1,2'
        content={
          <TableStyle1Wrapper>
            <Table columns={columnsLargeScreen} data={dataLargeScreen} />
          </TableStyle1Wrapper>
        }
      />

      <Spacer height={'064px'} />

      <H4TitleContentBlock
        title='Mobile'
        description='Largest sizes have been reduced to make the most of smaller screen size.
        This also helps for not wrapping text on multiple lines.'
        content={
          <TableStyle1Wrapper>
            <Table columns={columnsSmallScreen} data={dataSmallScreen} />
          </TableStyle1Wrapper>
        }
      />

      <Spacer height={'080px'} />
    </>
  )
}

export default TypographyPage
