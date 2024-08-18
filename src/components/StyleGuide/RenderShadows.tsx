import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'
import useResponsiveValue from '../../hooks/useResponsiveValue'

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
        gridTemplateColumns: '100px 75px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.small,
      }}
    >
      <span>Shadow {key}:</span>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: theme.colors.fill.background.raised,
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
      style={{
        gridColumn: useResponsiveValue(['1/-1', 'span 4', 'span 6']),
      }}
    />
  )
}

export default RenderShadows
