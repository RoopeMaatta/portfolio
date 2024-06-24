// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonFilled,
  StyledButtonOutline,
  StyledButtonText,
} from '../styles/buttonStyles'

type ButtonVariant = 'filled' | 'outline' | 'text'

const variantMap = {
  filled: StyledButtonFilled,
  outline: StyledButtonOutline,
  text: StyledButtonText,
}

interface ButtonProps {
  label: string;
  onClick?: () => void
  buttonRole?: ButtonVariant
}

// Functional component using styled button
const Button: React.FC<ButtonProps> = ({ label, onClick = () => {}, buttonRole = 'filled' }) => {
  const StyledButton = variantMap[buttonRole];

  return (
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonRole: PropTypes.oneOf([
    'filled',
    'outline',
    'text',
  ]),
}

export default Button
