// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledButtonFilled,
  StyledButtonOutline,
  StyledButtonText,
} from '../styles/buttonStyles'

const buttonRoleMap = {
  filled: StyledButtonFilled,
  outline: StyledButtonOutline,
  text: StyledButtonText,
}

// Functional component using styled button
const Button = ({
  label,
  onClick,
  buttonRole,
}) => {
  const StyledButton =
    buttonRoleMap[buttonRole] ||
    StyledButtonFilled
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
