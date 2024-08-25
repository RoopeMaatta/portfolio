import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { LiteralUnion } from 'type-fest'

// Define the type for CSS length values
type CustomLength =
  `${number}${'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax'}`

interface SpacerProps {
  gridColumn?: string
  height?: LiteralUnion<keyof DefaultTheme['spacing'], CustomLength>
  showVisualization?: boolean
}

const isValidSpacingKey = (
  theme: DefaultTheme,
  value: string
): value is keyof DefaultTheme['spacing'] => {
  return value in theme.spacing
}

const StyledSpacer = styled.div<SpacerProps>(
  ({
    theme,
    gridColumn = '1 / -1',
    height = '008px',
    showVisualization = false,
  }) => {
    const heightValue: string = isValidSpacingKey(theme, height)
      ? theme.spacing[height as keyof DefaultTheme['spacing']]
      : height

    return `
      grid-column: ${gridColumn};
      height: ${heightValue};
      ${showVisualization ? 'background-color: rgba(173, 216, 230, 0.3);' : ''}
    `
  }
)

const Spacer: React.FC<SpacerProps> = props => {
  return <StyledSpacer {...props} />
}

export default Spacer
