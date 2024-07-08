import React from 'react'
import RenderBlock from './RenderBlock'
import { useTheme } from 'styled-components'

interface RenderTypographyProps {
  typography: Record<string, React.CSSProperties>
}

const RenderTypography: React.FC<RenderTypographyProps> = ({ typography }) => {
  const theme = useTheme()

  const renderTypographyItem = (key: string, value: React.CSSProperties) => (
    <div
      key={key}
      style={{
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '100px auto',
        alignItems: 'center',
        textAlign: 'left',
        ...theme.typography.body,
      }}
    >
      <span>{key}:</span>
      <p style={{ ...value, margin: 0 }}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  )

  return (
    <RenderBlock
      title='Typography'
      data={typography}
      renderItem={renderTypographyItem}
    />
  )
}

export default RenderTypography
