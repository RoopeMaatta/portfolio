import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from 'styled-components'
import ColorPage from '../components/Pages/StyleGuidePage/ColorPage/ColorPage'
import ElevationPage from '../components/Pages/StyleGuidePage/ElevationPage/ElevationPage'
import TypographyPage from '../components/Pages/StyleGuidePage/TypographyPage/TypographyPage'
import TestingPage from '../components/Pages/StyleGuidePage/TestingPage'
import RenderSpacing from '../components/Pages/StyleGuidePage/StyleGuideOld/RenderSpacing'
import RenderRadius from '../components/Pages/StyleGuidePage/StyleGuideOld/RenderRadius'
import RenderBreakpoints from '../components/Pages/StyleGuidePage/StyleGuideOld/RenderBreakpoints'
import ButtonVariationsPage from '../components/Pages/ButtonVariationsPage'

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
      <Route path='button-variations' element={<ButtonVariationsPage />} />
    </Routes>
  )
}

export default StyleGuideContent
