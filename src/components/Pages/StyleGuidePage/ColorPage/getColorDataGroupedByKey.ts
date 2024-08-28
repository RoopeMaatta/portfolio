// Recursive type for nested color objects
type NestedColorObject = {
  [key: string]: string | NestedColorObject
}

// Type for the extracted color data
export type ColorData = {
  name: string
  lightMode: string
  darkMode: string
}

// Function to extract and flatten color data from nested objects
export const getColorDataGroupedByKey = (
  lightModeColors: NestedColorObject,
  darkModeColors: NestedColorObject
): Record<string, ColorData[]> => {
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

  const groupedData: Record<string, ColorData[]> = {}

  Object.keys(lightModeFlattened).forEach(key => {
    const [groupKey] = key.split('.') // Extract the top-level key (e.g., 'text', 'fill')
    if (!groupedData[groupKey]) {
      groupedData[groupKey] = []
    }
    groupedData[groupKey].push({
      name: key,
      lightMode: lightModeFlattened[key] || 'N/A',
      darkMode: darkModeFlattened[key] || 'N/A',
    })
  })

  return groupedData
}
