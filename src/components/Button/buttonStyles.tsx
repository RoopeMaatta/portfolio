import styled from 'styled-components'

// Styled component using destructuring
const ButtonBase = styled.button<{ fullWidth: boolean }>`
  ${({ theme: { colors, spacing, radius, typography }, fullWidth }) => {
    return `
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
  
    padding-left: ${spacing.xs};
    padding-right: ${spacing.xs};

    background-color: ${colors.fill.neutral.weak};
    color: ${colors.text.neutral.strong};
    
    ${typography.h1}

    transition: background-color 0.3s;
  
    border-radius: ${radius.m};
    cursor: pointer;

    width: ${fullWidth ? '100%' : 'auto'};

    &:hover {
      background-color: ${colors.background.raised};
    }

    &:active {
      background-color: ${colors.background.overlay};
    }

    .icon {
       display: inline-flex;
    }
  
    .label {
      padding: ${spacing.xs};
    }
    
  `
  }}
`

const StyledButtonFilled = styled(ButtonBase)``

const StyledButtonOutline = styled(ButtonBase)`
  ${({ theme: { colors, stroke } }) => `
    background-color: transparent;
    border: ${stroke.strong} solid ${colors.stroke.neutral.strong};
    

  `}
`
const StyledButtonText = styled(ButtonBase)`
  ${() => `
    background-color: transparent;
    border: none;
  `}
`

export { StyledButtonFilled, StyledButtonOutline, StyledButtonText }
