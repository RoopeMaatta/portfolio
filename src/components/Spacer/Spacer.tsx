import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { LiteralUnion } from 'type-fest'

type CustomLength =
  `${number}${'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax'}`
type SpacerHeight = LiteralUnion<keyof DefaultTheme['spacing'], CustomLength>

interface SpacerProps {
  gridColumn?: string
  height?: SpacerHeight
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
    let heightValue: string

    if (isValidSpacingKey(theme, height)) {
      heightValue = theme.spacing[height as keyof DefaultTheme['spacing']]
    } else {
      heightValue = height
    }

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
