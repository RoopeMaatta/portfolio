// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonFilled,
  StyledButtonOutline,
  StyledButtonText,
} from './buttonStyles'

type ButtonVariant = 'filled' | 'outline' | 'text'

const variantMap = {
  filled: StyledButtonFilled,
  outline: StyledButtonOutline,
  text: StyledButtonText,
}

interface ButtonProps {
  label: string
  onClick?: () => void
  buttonRole?: ButtonVariant
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

// Functional component using styled button
const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => {},
  buttonRole = 'filled',
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const StyledButton = variantMap[buttonRole]

  return (
    <StyledButton onClick={onClick} fullWidth={fullWidth}>
      {icon && iconPosition === 'left' && <span className='icon'>{icon}</span>}
      <span className='label'>{label}</span>
      {icon && iconPosition === 'right' && <span className='icon'>{icon}</span>}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonRole: PropTypes.oneOf(['filled', 'outline', 'text']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default Button
