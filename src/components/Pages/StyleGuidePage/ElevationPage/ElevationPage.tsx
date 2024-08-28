import React from 'react'
import { useTheme } from 'styled-components'
import { getTheme } from '../../../../themes/getTheme'
import ElevationVisualization from './ElevationVisualization'
import { ContainerFullWidth } from '../../../Atoms/ContainerFullWidth'
import { Spacer } from '../../../Atoms/Spacer'

// Main component rendering the color data table
const ColorPage: React.FC = () => {
  const theme = useTheme()
  // Fetching theme colors for light and dark modes
  const themeLightMode = getTheme(false, false)
  const themeDarkMode = getTheme(true, false)
  console.log(themeDarkMode.colors.fill.neutral.weak)
  theme.shadow.overlay
  theme.shadow.raised

  return (
    <ContainerFullWidth>
      <h1>Elevation</h1>
      <Spacer height={'016px'} />
      <h4>Light Mode</h4>
      <Spacer height={'008px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>
        Shadows work well to indicate different levels of elevation.
      </p>
      <Spacer height={'016px'} />
      <div>
        <ElevationVisualization theme={themeLightMode} />
      </div>
      <Spacer height={'040px'} />

      <h4>Dark Mode</h4>
      <Spacer height={'008px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>
        Progressively lighter background colors are used to indicate elevation
        in dark mode.
      </p>
      <Spacer height={'016px'} />
      <div>
        <ElevationVisualization theme={themeDarkMode} />
      </div>
      <Spacer height={'080px'} />
    </ContainerFullWidth>
  )
}

export default ColorPage
