// src/components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  )
}

// Inline styles for simplicity
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
