import React from 'react'
import { useTheme } from 'styled-components'
import { getTheme } from '../../../../themes/getTheme'
import ElevationVisualization from './ElevationVisualization'
import { Spacer } from '../../../Atoms/Spacer'
import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'

// Main component rendering the color data table
const ElevationPage: React.FC = () => {
  const theme = useTheme()
  // Fetching theme colors for light and dark modes
  const themeLightMode = getTheme(false, false)
  const themeDarkMode = getTheme(true, false)
  console.log(themeDarkMode.colors.fill.neutral.weak)
  theme.shadow.overlay
  theme.shadow.raised

  return (
    <>
      <h1>Elevation</h1>
      <Spacer height={'016px'} />

      <H4TitleContentBlock
        title='Light Mode'
        description='Shadows work well to indicate different levels of elevation.'
        content={<ElevationVisualization theme={themeLightMode} />}
      />

      <Spacer height={'040px'} />

      <H4TitleContentBlock
        title='Dark Mode'
        description='Progressively lighter background colors are used to indicate elevation
        in dark mode.'
        content={<ElevationVisualization theme={themeDarkMode} />}
      />
    </>
  )
}

export default ElevationPage
