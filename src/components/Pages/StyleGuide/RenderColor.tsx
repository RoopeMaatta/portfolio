import React from 'react'
import { useTheme } from 'styled-components'
import { getTheme } from '../../../themes/getTheme'
import Table from '../../Atoms/Table/Table'
import TableStyle1Wrapper from '../../Atoms/Table/TableStyle1Wrapper'
import { ContainerFullWidth } from '../../Atoms/ContainerFullWidth'
import { DefaultTheme } from 'styled-components'
import { Spacer } from '../../Atoms/Spacer'

// Recursive type for nested color objects
type NestedColorObject = {
  [key: string]: string | NestedColorObject
}

// Type for the extracted color data
type ColorData = {
  name: string
  lightMode: string
  darkMode: string
}

type TableColumn<T> = {
  header: string
  accessor: keyof T
  render?: (value: T[keyof T], row: T) => React.ReactNode
  cellStyle?: React.CSSProperties // Style for <td>
  headerStyle?: React.CSSProperties // Style for <th>
}

// Function to extract and flatten color data from nested objects
const getColorData = (
  lightModeColors: NestedColorObject,
  darkModeColors: NestedColorObject
): ColorData[] => {
  const extractColors = (
    colors: NestedColorObject,
    parentKey = ''
  ): Record<string, string> => {
    let result: Record<string, string> = {}

    for (const key in colors) {
      if (Object.prototype.hasOwnProperty.call(colors, key)) {
        const value = colors[key]
        const fullKey = parentKey ? `${parentKey}.${key}` : key

        if (typeof value === 'object' && value !== null) {
          result = { ...result, ...extractColors(value, fullKey) }
        } else {
          result[fullKey] = String(value)
        }
      }
    }

    return result
  }

  const lightModeFlattened = extractColors(lightModeColors)
  const darkModeFlattened = extractColors(darkModeColors)

  return Object.keys(lightModeFlattened).map(key => ({
    name: key,
    lightMode: lightModeFlattened[key] || 'N/A',
    darkMode: darkModeFlattened[key] || 'N/A',
  }))
}

// Table column configuration for ColorData
const getColumnsConfig = (
  colorsDarkMode: DefaultTheme['colors']
): TableColumn<ColorData>[] => {
  return [
    { header: 'Name', accessor: 'name' },
    {
      header: 'Light Mode',
      accessor: 'lightMode',
      render: renderColorSwatch,
    },
    {
      header: 'Dark Mode',
      accessor: 'darkMode',
      render: renderColorSwatch,
      headerStyle: {
        backgroundColor: colorsDarkMode.fill.background.base,
        color: colorsDarkMode.text.neutral.strong,
      },
      cellStyle: {
        backgroundColor: colorsDarkMode.fill.background.base,
        color: colorsDarkMode.text.neutral.strong,
      },
    },
  ]
}

const renderColorSwatch = (color: string) => {
  const theme = useTheme() // Access the theme directly
  const swatchStyle: React.CSSProperties = {
    width: `${theme.spacing['040px']}`,
    height: `${theme.spacing['040px']}`,
    backgroundColor: color,
    borderRadius: `${theme.radius['08px']}`,
    marginRight: `${theme.radius['08px']}`,
    flexShrink: 0, // Prevents the swatch from shrinking if the container is too small
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <span style={containerStyle}>
      <span style={swatchStyle}></span>
      <span>{color}</span>
    </span>
  )
}

// Main component rendering the color data table
const RenderColor: React.FC = () => {
  const theme = useTheme()
  // Fetching theme colors for light and dark modes
  const themeColorLightMode = getTheme(false, false).colors
  const themeColorDarkMode = getTheme(true, false).colors

  // Extracting the color data
  const colorData = getColorData(themeColorLightMode, themeColorDarkMode)

  // Generating the table columns configuration
  const columns = getColumnsConfig(themeColorDarkMode)

  return (
    <ContainerFullWidth>
      <h1>Color Tokens</h1>
      <Spacer height={'016px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>
        Use color tokens to give meaning and roles
      </p>
      <Spacer height={'080px'} />

      <TableStyle1Wrapper>
        <Table columns={columns} data={colorData} />
      </TableStyle1Wrapper>
    </ContainerFullWidth>
  )
}

export default RenderColor
