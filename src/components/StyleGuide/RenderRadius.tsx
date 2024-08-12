import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'
import useResponsiveValue from '../../hooks/useResponsiveValue'

interface RenderRadiusProps {
  radius: Record<string, string>
}

const RenderRadius: React.FC<RenderRadiusProps> = ({ radius }) => {
  const theme = useTheme()

  const renderRadiusItem = (key: string, value: string) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '100px 75px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
      }}
    >
      <span>Radius {key}:</span>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'white',
          borderRadius: value,
          border: '1px solid #000',
        }}
      ></div>
      <span style={{ marginLeft: '10px' }}>{value}</span>
    </div>
  )

  return (
    <RenderBlock
      title='Radius'
      data={radius}
      renderItem={renderRadiusItem}
      style={{
        gridColumn: useResponsiveValue(['1/-1', 'span 4', 'span 6']),
      }}
    />
  )
}

export default RenderRadius
