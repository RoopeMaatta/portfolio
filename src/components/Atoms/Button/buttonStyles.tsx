import styled, { css } from 'styled-components'

type ButtonSize = 'small' | 'regular' | 'large'

interface StyledButtonProps {
  fullWidth?: boolean
  onlyIcon?: boolean
  shape?: 'square' | 'regular' | 'round'
  size?: ButtonSize
}

// Styled component using destructuring
const ButtonBase = styled.button.withConfig({
  shouldForwardProp: prop => !['fullWidth', 'onlyIcon', 'size'].includes(prop),
})<StyledButtonProps>`
  ${({ theme, fullWidth, onlyIcon, shape, size }) => {
    const { colors, spacing, radius, typography, shadow, stroke } = theme

    const radiusButtonShapeDependant = (() => {
      switch (shape) {
        case 'square':
          return 0
        case 'round':
          return radius['32px']
        case 'regular':
        default:
          return radius['12px']
      }
    })()
    const paddingButtonSizeDependant = (() => {
      switch (size) {
        case 'small':
          return spacing['008px']
        case 'large':
          return spacing['012px']
        case 'regular':
        default:
          return spacing['020px']
      }
    })()

    const sizeDependantStyle = {
      small: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.tiny};
        height: ${spacing['032px']};
        width: ${() => {
          if (onlyIcon) return spacing['032px']
          if (fullWidth) return '100%'
          return 'auto'
        }};
      `,
      regular: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.small};
        height: ${spacing['048px']};
        width: ${() => {
          if (onlyIcon) return spacing['048px']
          if (fullWidth) return '100%'
          return 'auto'
        }};
      `,
      large: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.h4};
        height: ${spacing['056px']};
        width: ${() => {
          if (onlyIcon) return spacing['056px']
          if (fullWidth) return '100%'
          return 'auto'
        }};
      `,
    }

    return css`
      display: inline-flex;
      gap: ${spacing['004px']};
      align-items: center;
      vertical-align: middle;
      justify-content: center;
      box-shadow: ${shadow.raised};

      ${size && sizeDependantStyle[size]}

      background-color: ${colors.fill.brand.strong};
      color: ${colors.text.neutral.invert};

      border: none;
      border-radius: ${radiusButtonShapeDependant};
      cursor: pointer;

      position: relative;
      overflow: hidden;

      transition: box-shadow 0.5s ease;

      &:focus-visible {
        outline: ${stroke.strong} solid ${colors.stroke.brand.strong};
        outline-offset: 2px;
      }

      &:hover::before,
      &:active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        transition: background-color 0.1;
      }

      &:hover::before {
        background-color: ${colors.fill.state.hover};
      }

      &:hover {
        box-shadow: ${shadow.overlay};
      }

      &:active::before {
        background-color: ${colors.fill.state.press};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${theme.colors.fill.state.disabled};
        box-shadow: none;

        /* Prevent hover and active styles when disabled */
        &:hover::before,
        &:active::before {
          content: none;
          background-color: ${theme.colors.fill.state
            .disabled}; /* or set to none */
        }
        &:hover {
          box-shadow: none;
        }
      }

      .icon {
        display: inline-flex;
      }

      .label {
        padding-left: ${spacing['004px']};
        padding-right: ${spacing['004px']};
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
  ${({ theme: { colors, shadow } }) => `
    background-color: transparent;
    border: none;
    color: ${colors.text.brand.strong};
    box-shadow: none;

    &:hover {
        box-shadow: ${shadow.raised};
      }
  `}
`

export {
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonStroke,
  StyledButtonText,
}
