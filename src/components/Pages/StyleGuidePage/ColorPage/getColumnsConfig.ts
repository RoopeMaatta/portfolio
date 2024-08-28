import { DefaultTheme } from 'styled-components'
import { ColorData } from './getColorDataGroupedByKey'
import { renderColorSwatch } from './renderColorSwatch'

// Define TableColumn type
export type TableColumn<T> = {
  header: string
  accessor: keyof T
  render?: (value: T[keyof T], row: T) => React.ReactNode
  cellStyle?: React.CSSProperties // Style for <td>
  headerStyle?: React.CSSProperties // Style for <th>
}

// Table column configuration for ColorData
export const getColumnsConfig = (
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
