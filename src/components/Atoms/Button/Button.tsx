// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonFilled,
  StyledButtonTonal,
  StyledButtonStroke,
  StyledButtonText,
} from './buttonStyles'

type ButtonVariant = 'filled' | 'tonal' | 'outline' | 'text'
type ButtonSize = 'small' | 'regular' | 'large'
type ButtonShape = 'round' | 'regular'

const variantMap = {
  filled: StyledButtonFilled,
  tonal: StyledButtonTonal,
  outline: StyledButtonStroke,
  text: StyledButtonText,
}

interface ButtonProps {
  label?: string
  onClick?: () => void
  buttonStyle?: ButtonVariant
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  size?: ButtonSize
  shape?: ButtonShape
  style?: React.CSSProperties
}

// Functional component using styled button
const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => {},
  buttonStyle = 'filled',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  size = 'regular',
  shape = 'regular',
  style,
}) => {
  const StyledButton = variantMap[buttonStyle]
  const onlyIcon = !!(icon && !label)

  return (
    <StyledButton
      onClick={onClick}
      fullWidth={fullWidth}
      onlyIcon={onlyIcon}
      size={size}
      shape={shape}
      style={style}
    >
      {icon && iconPosition === 'left' && <span className='icon'>{icon}</span>}
      {label && <span className='label'>{label}</span>}
      {icon && iconPosition === 'right' && <span className='icon'>{icon}</span>}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(['filled', 'tonal', 'outline', 'text']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default Button
