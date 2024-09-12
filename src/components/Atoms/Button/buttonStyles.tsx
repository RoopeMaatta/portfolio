import styled, { css } from 'styled-components'
import { interactivePseudoClassStyles } from '../../../styles/interactivePseudoClassStyles'

type ButtonSize = 'small' | 'regular' | 'large'

interface StyledButtonProps {
  fullWidth?: boolean
  onlyIcon?: boolean
  noPadding?: boolean
  noIconOrLabel?: boolean
  shape?: 'square' | 'regular' | 'round'
  size?: ButtonSize
}

// Styled component using destructuring
const ButtonBase = styled.button.withConfig({
  shouldForwardProp: prop =>
    ![
      'fullWidth',
      'onlyIcon',
      'noPadding',
      'noIconOrLabel',
      'shape',
      'size',
    ].includes(prop),
})<StyledButtonProps>`
  ${({ theme, fullWidth, onlyIcon, noPadding, noIconOrLabel, shape, size }) => {
    const { colors, spacing, radius, typography, shadow } = theme

    const shapeRadiusMap = {
      square: 0,
      round: radius['32px'],
      regular: radius['12px'],
    }
    const radiusButtonShapeDependant = shapeRadiusMap[shape || 'regular']

    const sizeDependantStyle = {
      small: css`
        padding-left: ${noPadding ? 0 : spacing['008px']};
        padding-right: ${noPadding ? 0 : spacing['008px']};
        ${typography.tiny};
        height: ${noIconOrLabel ? 'auto' : spacing['032px']};
        width: ${onlyIcon ? spacing['032px'] : fullWidth ? '100%' : 'auto'};
        .icon {
          display: inline-flex;
          width: 20px;
          height: 20px;
        }
      `,
      regular: css`
        padding-left: ${noPadding ? 0 : spacing['012px']};
        padding-right: ${noPadding ? 0 : spacing['012px']};
        ${typography.small};
        height: ${noIconOrLabel ? 'auto' : spacing['048px']};
        width: ${onlyIcon ? spacing['048px'] : fullWidth ? '100%' : 'auto'};
        .icon {
          display: inline-flex;
          width: 24px;
          height: 24px;
        }
      `,
      large: css`
        padding-left: ${noPadding ? 0 : spacing['020px']};
        padding-right: ${noPadding ? 0 : spacing['020px']};
        ${typography.h4};
        height: ${noIconOrLabel ? 'auto' : spacing['056px']};
        width: ${onlyIcon ? spacing['056px'] : fullWidth ? '100%' : 'auto'};
        .icon {
          display: inline-flex;
          width: 28px;
          height: 28px;
        }
      `,
    }

    return css`
      ${size && sizeDependantStyle[size]}
      ${interactivePseudoClassStyles}

      display: inline-flex;
      gap: ${spacing['004px']};
      align-items: center;
      vertical-align: middle;
      justify-content: center;
      box-shadow: ${shadow.raised};

      background-color: ${colors.fill.brand.strong};
      color: ${colors.text.neutral.invert};

      border: none;
      border-radius: ${radiusButtonShapeDependant};
      cursor: pointer;

      position: relative;

      transition: box-shadow 0.5s ease;

      .icon svg {
        width: 100%;
        height: 100%;
      }

      .label {
        padding-left: ${spacing['004px']};
        padding-right: ${spacing['004px']};
      }

      // text-decoration-line: underline;
      // text-underline-offset: ${spacing['004px']};
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
const StyledButtonClear = styled(ButtonBase)`
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
  StyledButtonClear,
}
