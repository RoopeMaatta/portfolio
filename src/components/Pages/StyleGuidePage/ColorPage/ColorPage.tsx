import React from 'react'
import { useTheme } from 'styled-components'
import { getTheme } from '../../../../themes/getTheme'
import Table from '../../../Molecules/Table/Table'
import TableStyle1Wrapper from '../../../Molecules/Table/TableStyle1Wrapper'
import { Spacer } from '../../../Atoms/Spacer'
import { getColorDataGroupedByKey } from './getColorDataGroupedByKey'
import { getColumnsConfig } from './getColumnsConfig'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'

// Main component rendering the color data table
const ColorPage: React.FC = () => {
  const theme = useTheme()
  // Fetching theme colors for light and dark modes
  const themeColorLightMode = getTheme(false, false).colors
  const themeColorDarkMode = getTheme(true, false).colors

  // Extracting the color data grouped by the top-level key
  const groupedColorData = getColorDataGroupedByKey(
    themeColorLightMode,
    themeColorDarkMode
  )

  return (
    <>
      <h1>Color Tokens</h1>
      <Spacer height={'016px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>
        Use color tokens to give meaning and roles
      </p>

      {Object.entries(groupedColorData).map(([groupKey, colorData]) => (
        <>
          <Spacer height={'080px'} />
          <H4TitleContentBlock
            key={groupKey}
            title={groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}
            description={false}
            content={
              <TableStyle1Wrapper>
                <Table
                  columns={getColumnsConfig(
                    themeColorDarkMode,
                    themeColorLightMode
                  )}
                  data={colorData}
                />
              </TableStyle1Wrapper>
            }
          />
        </>
      ))}
    </>
  )
}

export default ColorPage
