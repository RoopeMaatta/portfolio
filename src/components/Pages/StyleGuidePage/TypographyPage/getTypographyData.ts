import { TypographyData, TypographyStyle } from './types'

// Function to extract typography data
export const getTypographyData = (
  typography: Record<string, TypographyStyle>
): TypographyData[] => {
  return Object.keys(typography).map(key => {
    const typestyle = typography[key]
    return {
      typeset: key,
      size: typestyle?.fontSize || 'N/A',
      lineHeight: typestyle?.lineHeight || 'N/A',
    }
  })
}
