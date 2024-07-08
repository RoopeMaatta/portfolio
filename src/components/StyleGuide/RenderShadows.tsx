import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'

interface RenderShadowsProps {
  shadows: Record<string, string>
}

const RenderShadows: React.FC<RenderShadowsProps> = ({ shadows }) => {
  const theme = useTheme()

  const renderShadowsItem = (key: string, value: string) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '200px 100px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
      }}
    >
      <span>Shadow {key}:</span>
      <div
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'white',
          boxShadow: value,
        }}
      ></div>
      <span style={{ marginLeft: '10px' }}>{value}</span>
    </div>
  )

  return (
    <RenderBlock
      title='Shadows'
      data={shadows}
      renderItem={renderShadowsItem}
    />
  )
}

export default RenderShadows
