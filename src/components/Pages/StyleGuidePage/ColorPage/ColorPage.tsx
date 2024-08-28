import React from 'react'
import { useTheme } from 'styled-components'
import { getTheme } from '../../../../themes/getTheme'
import Table from '../../../Atoms/Table/Table'
import TableStyle1Wrapper from '../../../Atoms/Table/TableStyle1Wrapper'
import { ContainerFullWidth } from '../../../Atoms/ContainerFullWidth'
import { Spacer } from '../../../Atoms/Spacer'
import { getColorDataGroupedByKey } from './getColorDataGroupedByKey'
import { getColumnsConfig } from './getColumnsConfig'

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
    <ContainerFullWidth>
      <h1>Color Tokens</h1>
      <Spacer height={'016px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>
        Use color tokens to give meaning and roles
      </p>
      <Spacer height={'080px'} />

      {Object.entries(groupedColorData).map(([groupKey, colorData]) => (
        <div key={groupKey}>
          <h4>{groupKey.charAt(0).toUpperCase() + groupKey.slice(1)}</h4>
          <Spacer height={'016px'} />
          <TableStyle1Wrapper>
            <Table
              columns={getColumnsConfig(
                themeColorDarkMode,
                themeColorLightMode
              )}
              data={colorData}
            />
          </TableStyle1Wrapper>
          <Spacer height={'080px'} />
        </div>
      ))}
    </ContainerFullWidth>
  )
}

export default ColorPage
