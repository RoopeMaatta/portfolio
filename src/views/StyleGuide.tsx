import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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
      <nav style={{ gridColumn: '1/-1' }}>
        <ul>
          <li>
            <Link to='/style-guide/typography'>Typography</Link>
          </li>
          <li>
            <Link to='/style-guide/colors'>Colors</Link>
          </li>
          <li>
            <Link to='/style-guide/spacing'>Spacing</Link>
          </li>
          <li>
            <Link to='/style-guide/radius'>Radius</Link>
          </li>
          <li>
            <Link to='/style-guide/shadows'>Shadows</Link>
          </li>
          <li>
            <Link to='/style-guide/breakpoints'>Breakpoints</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path='typography'
          element={<RenderTypography typography={theme.typography} />}
        />
        <Route
          path='colors'
          element={<RenderColorBlocks colors={theme.colors} />}
        />
        <Route
          path='spacing'
          element={<RenderSpacing spacing={theme.spacing} />}
        />
        <Route path='radius' element={<RenderRadius radius={theme.radius} />} />
        <Route
          path='shadows'
          element={<RenderShadows shadows={theme.shadow} />}
        />
        <Route path='breakpoints' element={<RenderBreakpoints />} />
      </Routes>
    </>
  )
}

export default StyleGuide
