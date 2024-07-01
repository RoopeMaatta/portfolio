import styled from 'styled-components'

// Styled component using destructuring
const ButtonBase = styled.button<{ fullWidth: boolean }>`
  ${({ theme: { colors, spacing, fontSize }, fullWidth }) => {
    return `
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
  
    padding-left: ${spacing.xs};
    padding-right: ${spacing.xs};

    background-color: ${colors.primary};
    color: ${colors.text};
    font-size: ${fontSize.medium};
    
    transition: background-color 0.3s;
  
    border-radius: 16px;
    cursor: pointer;

    width: ${fullWidth ? '100%' : 'auto'};

    &:hover {
      background-color: ${colors.secondary};
    }

    &:active {
      background-color: ${colors.primaryDark};
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
  ${({ theme: { colors } }) => `
    background-color: transparent;
    border: 2px solid ${colors.primary};
  `}
`
const StyledButtonText = styled(ButtonBase)`
  ${() => `
    background-color: transparent;
    border: none;
  `}
`

export { StyledButtonFilled, StyledButtonOutline, StyledButtonText }
