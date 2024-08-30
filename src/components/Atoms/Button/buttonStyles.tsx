import styled, { css } from 'styled-components'

type ButtonSize = 'small' | 'regular' | 'large'

interface StyledButtonProps {
  fullWidth?: boolean
  onlyIcon?: boolean
  shape?: 'round' | 'regular'
  size?: ButtonSize
}

// Styled component using destructuring
const ButtonBase = styled.button.withConfig({
  shouldForwardProp: prop => !['fullWidth', 'onlyIcon', 'size'].includes(prop),
})<StyledButtonProps>`
  ${({ theme, fullWidth, onlyIcon, shape, size }) => {
    const { colors, spacing, radius, typography } = theme

    const radiusMap: Record<ButtonSize, string> = {
      small: radius['12px'],
      regular: radius['16px'],
      large: radius['16px'],
    }

    const radiusButtonShapeAndSizeDependant =
      shape === 'round' ? radius['24px'] : radiusMap[size || 'regular']

    const paddingButtonSizeDependant = (() => {
      switch (size) {
        case 'small':
          return spacing['004px']
        case 'large':
          return spacing['012px']
        case 'regular':
        default:
          return spacing['008px']
      }
    })()

    const sizeDependantStyle = {
      small: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.small};
      `,
      regular: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.small};
      `,
      large: css`
        padding-left: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        padding-right: ${onlyIcon ? 0 : paddingButtonSizeDependant};
        ${typography.small};
      `,
    }

    return css`
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      justify-content: center;

      ${size && sizeDependantStyle[size]}

      background-color: ${colors.fill.brand.strong};
      color: ${colors.text.neutral.invert};

      border: none;
      border-radius: ${radiusButtonShapeAndSizeDependant};
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
        padding: ${onlyIcon ? paddingButtonSizeDependant : 0};
      }

      .label {
        padding: ${paddingButtonSizeDependant};
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
