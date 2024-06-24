import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getTheme } from './globalVariables'
import { useDarkMode } from './useDarkMode'

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isDarkMode = useDarkMode()

  return (
    <StyledThemeProvider theme={getTheme(isDarkMode)}>
      {children}
    </StyledThemeProvider>
  );
};
