import styled, { css } from 'styled-components'

// Styled component using destructuring
const ButtonBase = styled.button.withConfig({
  shouldForwardProp: prop => !['fullWidth'].includes(prop),
})<{ fullWidth: boolean }>`
  ${({ theme, fullWidth }) => {
    const { colors, spacing, radius, typography } = theme
    return css`
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      justify-content: center;

      padding-left: ${spacing[8]};
      padding-right: ${spacing[8]};

      background-color: ${colors.fill.brand.strong};
      color: ${colors.text.neutral.invert};

      ${typography.body};

      border: none;
      border-radius: ${radius[16]};
      cursor: pointer;

      width: ${fullWidth ? '100%' : 'auto'};

      position: relative;
      overflow: hidden;

      &:hover::before,
      &:active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        transition: background-color 0.1s;
      }

      &:hover::before {
        background-color: ${colors.fill.state.hover};
      }

      &:active::before {
        background-color: ${colors.fill.state.press};
      }

      .icon {
        display: inline-flex;
      }

      .label {
        padding: ${spacing[8]};
      }
    `
  }}
`

const StyledButtonFilled = styled(ButtonBase)``

const StyledButtonTonal = styled(ButtonBase)`
  ${({ theme: { colors } }) => `
      background-color: ${colors.fill.brand.weak};
      color: ${colors.text.brand.strong};
  `}
`
const StyledButtonStroke = styled(ButtonBase)`
  // Nimi stroke
  ${({ theme: { colors, stroke } }) => `
    background-color: transparent;
    color: ${colors.text.brand.strong};
    border: ${stroke.strong} solid ${colors.stroke.brand.strong};
  `}
`
const StyledButtonText = styled(ButtonBase)`
  ${({ theme: { colors } }) => `
    background-color: transparent;
    border: none;
    color: ${colors.text.brand.strong};
  `}
`

export {
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonStroke,
  StyledButtonText,
}
