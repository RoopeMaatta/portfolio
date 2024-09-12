import styled, { css } from 'styled-components'

interface StyledCardProps {
  isHorizontal?: boolean // Prop used only for styling
  gridColumn?: string
}

// Shared card styling for both variants with shouldForwardProp
const CardBase = styled.div.withConfig({
  shouldForwardProp: prop => !['isHorizontal', 'gridColumn'].includes(prop), // Prevent 'isHorizontal' from being passed to the DOM
})<StyledCardProps>`
  ${({ theme, isHorizontal, gridColumn }) => {
    const { shadow, colors, spacing, radius } = theme

    return css`
      box-shadow: ${shadow.overlay};
      background-color: ${colors.fill.background.overlay};
      border-radius: ${radius['16px']};
      position: relative;
      display: flex;
      flex-direction: ${isHorizontal ? 'row' : 'column'};
      align-items: stretch;
      justify-content: flex-start;
      max-width: 100%;
      flex-grow: 1;

      grid-column: ${gridColumn};

      /* Apply padding to all children except the image */
      & > *:not(img) {
        padding: ${spacing['024px']};
      }
    `
  }}
`

// Card Image styling
const CardImage = styled.img.withConfig({
  shouldForwardProp: prop => !['isHorizontal'].includes(prop), // Prevent 'isHorizontal' from being passed to the DOM
})<StyledCardProps>`
  ${({ isHorizontal }) => {
    return css`
      width: ${isHorizontal ? '40%' : 'auto'};
      height: ${isHorizontal ? 'auto' : '40%'};
      object-fit: cover;

      /* Apply border-radius to specific corners */
      border-top-left-radius: inherit;
      border-bottom-right-radius: 0;
      border-top-right-radius: ${isHorizontal ? '0' : 'inherit'};
      border-bottom-left-radius: ${isHorizontal ? 'inherit' : '0'};

      flex-shrink: 0;
      padding: 0;

      /* In horizontal layout, make the image take up half the width */
    `
  }}
`

const StyledCardRaised = styled(CardBase)`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.raised};
    background-color: ${theme.colors.fill.background.raised};
  `}
`

const StyledCardOverlay = styled(CardBase)`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.overlay};
    background-color: ${theme.colors.fill.background.overlay};
  `}
`

export { StyledCardRaised, StyledCardOverlay, CardImage }
