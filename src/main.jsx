import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { WindowSizeProvider } from './contexts/WindowSizeContext'
import { DevVisualizationProvider } from './contexts/DevVisualizationContext'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <ThemeProvider>
        <DevVisualizationProvider>
          <GlobalStyle />
          <App />
        </DevVisualizationProvider>
      </ThemeProvider>
    </WindowSizeProvider>
  </React.StrictMode>
)
