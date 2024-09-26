import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from 'styled-components'
import ColorPage from './ColorPage/ColorPage'
import ElevationPage from './ElevationPage/ElevationPage'
import TypographyPage from './TypographyPage/TypographyPage'
import TestingPage from './TestingPage'
import RenderSpacing from '../StyleGuide/RenderSpacing'
import RenderRadius from '../StyleGuide/RenderRadius'
import RenderBreakpoints from '../StyleGuide/RenderBreakpoints'

interface Theme {
  colors: Record<string, string | Record<string, string>>
  typography: Record<string, React.CSSProperties>
  spacing: Record<string, string>
  radius: Record<string, string>
  shadow: Record<string, string>
}

const StyleGuideContent: React.FC = () => {
  const theme = useTheme() as unknown as Theme

  return (
    <Routes>
      <Route path='typography' element={<TypographyPage />} />
      <Route path='colors' element={<ColorPage />} />
      <Route
        path='spacing'
        element={<RenderSpacing spacing={theme.spacing} />}
      />
      <Route path='radius' element={<RenderRadius radius={theme.radius} />} />
      <Route path='elevation' element={<ElevationPage />} />
      <Route path='breakpoints' element={<RenderBreakpoints />} />
      <Route path='testing' element={<TestingPage />} />
    </Routes>
  )
}

export default StyleGuideContent
