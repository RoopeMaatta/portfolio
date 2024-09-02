import styled, { css } from 'styled-components'

interface StyledCardProps {
  hasImage?: boolean
}

// Styled component using destructuring
const CardBase = styled.button.withConfig({
  shouldForwardProp: prop => !['hasImage'].includes(prop),
})<StyledCardProps>`
  ${({ theme }) => {
    const { shadow, colors, spacing, radius } = theme

    return css`
      box-shadow: ${shadow.overlay};
      background-color: ${colors.fill.background.overlay};
      border-radius: ${radius['16px']};
      padding: ${spacing['008px']};

      width: 100%;
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      justify-content: center;
    `
  }}
`

const StyledCardRaised = styled(CardBase)``

const StyledCardOverlay = styled(CardBase)`
  ${({ theme: { shadow, colors } }) => `
     box-shadow: ${shadow.raised};
    background-color: ${colors.fill.background.raised};
  `}
`

export { StyledCardRaised, StyledCardOverlay }
