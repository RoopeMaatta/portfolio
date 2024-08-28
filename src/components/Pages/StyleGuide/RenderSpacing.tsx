import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'
import useResponsiveValue from '../../../hooks/useResponsiveValue'

interface RenderSpacingProps {
  spacing: Record<string, string>
}

const RenderSpacing: React.FC<RenderSpacingProps> = ({ spacing }) => {
  const theme = useTheme()

  const renderSpacingItem = (key: string, value: string) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '125px 300px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.small,
      }}
    >
      <span>Spacing {key}:</span>
      <div
        style={{
          borderLeft: '2px solid #000',
          borderRight: '2px solid #000',
          height: '20px',
          width: value,
        }}
      ></div>
      <span style={{ marginLeft: '10px' }}>{value}</span>
    </div>
  )

  return (
    <RenderBlock
      title='Spacing'
      data={spacing}
      renderItem={renderSpacingItem}
      style={{
        gridColumn: useResponsiveValue(['1/-1', 'span 4', 'span 6']),
      }}
    />
  )
}

export default RenderSpacing
