import React from 'react'
import { useTheme } from 'styled-components'
import RenderColorBlocks from '../components/StyleGuide/RenderColorBlocks'
import RenderTypography from '../components/StyleGuide/RenderTypography'
import RenderSpacing from '../components/StyleGuide/RenderSpacing'
import RenderRadius from '../components/StyleGuide/RenderRadius'
import RenderShadows from '../components/StyleGuide/RenderShadows'

interface Theme {
  colors: Record<string, string | Record<string, string>>
  typography: Record<string, React.CSSProperties>
  spacing: Record<string, string>
  radius: Record<string, string>
  shadow: Record<string, string>
}

const StyleGuide: React.FC = () => {
  const theme = useTheme() as unknown as Theme

  return (
    <div
      style={{ padding: '20px', textAlign: 'left', ...theme.typography.body }}
    >
      <h1>Style Guide</h1>
      <RenderColorBlocks colors={theme.colors} />
      <RenderTypography typography={theme.typography} />
      <RenderSpacing spacing={theme.spacing} />
      <RenderRadius radius={theme.radius} />
      <RenderShadows shadows={theme.shadow} />
    </div>
  )
}

export default StyleGuide
