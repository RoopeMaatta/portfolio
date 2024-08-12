import React from 'react'
import { useTheme } from 'styled-components'
import RenderColorBlocks from '../components/StyleGuide/RenderColorBlocks'
import RenderTypography from '../components/StyleGuide/RenderTypography'
import RenderSpacing from '../components/StyleGuide/RenderSpacing'
import RenderRadius from '../components/StyleGuide/RenderRadius'
import RenderShadows from '../components/StyleGuide/RenderShadows'
import RenderBreakpoints from '../components/StyleGuide/RenderBreakpoints'

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
    <>
      {/* <h1>Style Guide</h1> */}

      <RenderTypography typography={theme.typography} />
      <RenderColorBlocks colors={theme.colors} />
      <RenderSpacing spacing={theme.spacing} />
      <RenderRadius radius={theme.radius} />
      <RenderShadows shadows={theme.shadow} />
      <RenderBreakpoints />
    </>
  )
}

export default StyleGuide
