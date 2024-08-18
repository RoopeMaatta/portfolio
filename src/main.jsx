import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/themeContext'
import { WindowSizeProvider } from './contexts/WindowSizeContext'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <ThemeProvider>
        <GlobalStyle />

        <App />
      </ThemeProvider>
    </WindowSizeProvider>
  </React.StrictMode>
)
