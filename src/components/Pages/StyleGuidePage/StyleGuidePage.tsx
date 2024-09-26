import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import ColorPage from './ColorPage/ColorPage'
import ElevationPage from './ElevationPage/ElevationPage'
import TypographyPage from './TypographyPage/TypographyPage'
import TestingPage from './TestingPage'
import RenderSpacing from '../StyleGuide/RenderSpacing'
import RenderRadius from '../StyleGuide/RenderRadius'
import RenderBreakpoints from '../StyleGuide/RenderBreakpoints'
import Card from 'src/components/Organisms/Card/Card'
import { ButtonContainer } from 'src/components/Atoms/Button'
// import { Spacer } from 'src/components/Atoms/Spacer'
import GridWrapper from 'src/components/Organisms/GridContainer/GridWrapper'

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
      <GridWrapper rowGap>
        <ButtonContainer style={{ gridColumn: 'span 4' }}>
          <Card image content={false} description={false} />
        </ButtonContainer>
        <ButtonContainer style={{ gridColumn: 'span 4' }}>
          <Card image content={false} description={false} />
        </ButtonContainer>
        <Card
          style={{ gridColumn: 'span 4' }}
          image
          content={false}
          description='Description testsldfkj sdlfkj  sdlkfj  sdlfkj sldfk'
        />
        <ButtonContainer useAsContainer style={{ gridColumn: 'span 4' }}>
          <Card description={false} />
        </ButtonContainer>

        <ButtonContainer style={{ gridColumn: 'span 4' }}>
          <Card
            image
            content={false}
            description='aaaDaescription testsldfkj sdlfkj  sdlkfj  sdlfkj sldfk'
          />
        </ButtonContainer>
      </GridWrapper>
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
            <Link to='/style-guide/elevation'>Elevation</Link>
          </li>
          <li>
            <Link to='/style-guide/breakpoints'>Breakpoints</Link>
          </li>
          <li>
            <Link to='/style-guide/testing'>Testing</Link>
          </li>
        </ul>
      </nav>

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
    </>
  )
}

export default StyleGuidePage
