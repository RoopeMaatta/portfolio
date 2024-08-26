import React from 'react'

interface TableColumn<T> {
  header: string
  accessor: keyof T
  render?: (value: T[keyof T]) => React.ReactNode
}

interface TableProps<T> {
  columns: Array<TableColumn<T>>
  data: T[]
  style?: React.CSSProperties
}

const Table = <T,>({ columns, data, style }: TableProps<T>) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render
                    ? col.render(row[col.accessor])
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
