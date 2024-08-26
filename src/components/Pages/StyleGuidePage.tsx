import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import RenderColor from './StyleGuide/RenderColor'
import RenderTypography from './StyleGuide/RenderTypography'
import RenderSpacing from './StyleGuide/RenderSpacing'
import RenderRadius from './StyleGuide/RenderRadius'
import RenderShadows from './StyleGuide/RenderShadows'
import RenderBreakpoints from './StyleGuide/RenderBreakpoints'

interface Theme {
  colors: Record<string, string | Record<string, string>>
  typography: Record<string, React.CSSProperties>
  spacing: Record<string, string>
  radius: Record<string, string>
  shadow: Record<string, string>
}

const StyleGuidePage: React.FC = () => {
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
        <Route path='colors' element={<RenderColor />} />
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

export default StyleGuidePage
