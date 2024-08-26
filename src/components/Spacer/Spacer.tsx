import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { LiteralUnion } from 'type-fest'
import { useDevVisualizationContext } from '../../contexts/DevVisualizationContext'

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
      position: relative;
      grid-column: ${gridColumn};
      height: ${heightValue};
      ${showVisualization ? 'background-color: rgba(173, 216, 230, 0.3);' : ''}
      
      ${
        showVisualization
          ? `
        &:after {
          content: '${heightValue}';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: ${theme.colors.fill.background.overlay};
          color: ${theme.colors.text.neutral.strong};
          padding: ${theme.spacing['004px']} ${theme.spacing['008px']} ;
          border-radius: ${theme.radius['08px']};
          border-style: solid;
          border-color: ${theme.colors.stroke.brand.weak};
          border-width: ${theme.stroke.strong};
          box-shadow: ${theme.shadow.raised};
        }
      `
          : ''
      }
    `
  }
)

const Spacer: React.FC<SpacerProps> = props => {
  const { showSpacerVisualization } = useDevVisualizationContext()

  // Use the prop value if provided, otherwise fallback to context value
  const showVisualization = props.showVisualization ?? showSpacerVisualization

  return <StyledSpacer {...props} showVisualization={showVisualization} />
}

export default Spacer
