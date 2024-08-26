import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'
import useResponsiveValue from '../../../hooks/useResponsiveValue'

interface RenderColorBlocksProps {
  colors: Record<string, string | Record<string, string>>
}

// Helper function to flatten nested color objects
const flattenColors = (
  colors: Record<string, string | Record<string, string>>,
  path: string[] = []
): Record<string, string> => {
  return Object.keys(colors).reduce(
    (acc, key) => {
      const value = colors[key]
      const newPath = [...path, key]
      if (typeof value === 'object' && value !== null) {
        Object.assign(acc, flattenColors(value, newPath))
      } else {
        acc[newPath.join(' > ')] = value
      }
      return acc
    },
    {} as Record<string, string>
  )
}

const RenderColorBlocks: React.FC<RenderColorBlocksProps> = ({ colors }) => {
  const theme = useTheme()

  const renderColorItem = (key: string, value: string) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '200px 75px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.small,
      }}
    >
      <span>{key}:</span>
      <div
        style={{
          backgroundColor: value,
          width: '50px',
          height: '25px',
          border: '1px solid #000',
        }}
      ></div>
      <span style={{ marginLeft: '10px' }}>{value}</span>
    </div>
  )

  const flattenedColors = flattenColors(colors)
  return (
    <RenderBlock
      title='Colors'
      data={flattenedColors}
      renderItem={renderColorItem}
      style={{
        gridColumn: useResponsiveValue(['1/-1', '1/-1', 'span 6']),
      }}
    />
  )
}

export default RenderColorBlocks
