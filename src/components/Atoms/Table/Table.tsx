import React from 'react'

interface TableColumn<T> {
  header: string
  accessor: keyof T
  render?: (value: T[keyof T], row: T) => React.ReactNode
  cellStyle?: React.CSSProperties // Style for <td>
  headerStyle?: React.CSSProperties // Style for <th>
}

interface TableProps<T> {
  columns: Array<TableColumn<T>>
  data: T[]
  style?: React.CSSProperties // Overall table style
}

const Table = <T,>({ columns, data, style }: TableProps<T>) => {
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
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={col.cellStyle}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
