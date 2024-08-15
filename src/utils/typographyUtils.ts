// Function to convert camelCase to kebab-case
export const toKebabCase = (str: string): string =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

// Function to apply typography styles from theme
export const applyTypographyToCss = (
  typography: Record<string, string | number>
): string => {
  return Object.entries(typography)
    .map(([key, value]) => `${toKebabCase(key)}: ${value};`)
    .join(' ')
}
