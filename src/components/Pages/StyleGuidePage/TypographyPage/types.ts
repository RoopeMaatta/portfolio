// Define the typography style type based on theme's typography structure
export interface TypographyStyle {
  fontSize: string
  lineHeight: string
}

// Define the data type for typography
export interface TypographyData {
  typeset: string
  size: string
  lineHeight: string
}

export interface TableColumn<T> {
  header: string
  accessor: keyof T
  render?: (value: string) => React.ReactNode
}
