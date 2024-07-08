import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'

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
        gridTemplateColumns: '200px auto 100px',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
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
    />
  )
}

export default RenderSpacing
