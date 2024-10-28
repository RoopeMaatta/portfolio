import React from 'react'

export interface TableColumn<T, K extends keyof T = keyof T> {
  header: string
  accessor: K
  render?: (value: T[K], row: T) => React.ReactNode
  cellStyle?: React.CSSProperties
  headerStyle?: React.CSSProperties
}

interface TableProps<T> {
  columns: Array<TableColumn<T>>
  data: T[]
  style?: React.CSSProperties
}

const Table = <T,>({ columns, data, style }: TableProps<T>) => {
  // Helper function to ensure the value is a ReactNode
  const renderCellValue = (value: T[keyof T]): React.ReactNode => {
    if (React.isValidElement(value)) {
      return value
    } else if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return value
    } else if (value === null || value === undefined) {
      return null
    } else {
      // For any other types (e.g., objects), you can customize how to render them
      return JSON.stringify(value)
    }
  }

  return (
    <div style={{ ...style }}>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={col.headerStyle}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => {
                const value = row[col.accessor]
                return (
                  <td key={colIndex} style={col.cellStyle}>
                    {col.render
                      ? col.render(value, row)
                      : renderCellValue(value)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
