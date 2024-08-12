import React from 'react'

interface TableProps<T> {
  columns: Array<{ header: string; accessor: keyof T }>
  data: T[]
  style?: React.CSSProperties
}

const Table = <T,>({ columns, data, style }: TableProps<T>) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', ...style }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              style={{ borderBottom: '2px solid black', padding: '10px' }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} style={{ padding: '10px' }}>
                {String(row[col.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
