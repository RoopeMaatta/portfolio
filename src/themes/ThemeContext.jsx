// src/contexts/ThemeContext.js
import React, { useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { getTheme } from './globalVariables'

export const ThemeProvider = ({ children }) => {
  // Initialize the dark mode state based on the prefers-color-scheme media query
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
  )

  // Effect to listen for changes in the preferred color scheme
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )

    const handleChange = e => {
      setIsDarkMode(e.matches)
    }

    // Listen for changes in the media query
    mediaQuery.addEventListener(
      'change',
      handleChange
    )

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleChange
      )
    }
  }, [])

  return (
    <StyledThemeProvider
      theme={getTheme(isDarkMode)}
    >
      {children}
    </StyledThemeProvider>
  )
}
