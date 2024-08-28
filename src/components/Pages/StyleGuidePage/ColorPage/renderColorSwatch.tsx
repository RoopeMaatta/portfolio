import React from 'react'
import { useTheme } from 'styled-components'

export const renderColorSwatch = (color: string) => {
  const theme = useTheme() // Access the theme directly
  const swatchStyle: React.CSSProperties = {
    width: `${theme.spacing['040px']}`,
    height: `${theme.spacing['040px']}`,
    backgroundColor: color,
    borderRadius: `${theme.radius['08px']}`,
    marginRight: `${theme.radius['08px']}`,
    flexShrink: 0, // Prevents the swatch from shrinking if the container is too small
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <span style={containerStyle}>
      <span style={swatchStyle}></span>
      <span>{color}</span>
    </span>
  )
}
