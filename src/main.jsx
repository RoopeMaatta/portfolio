import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { WindowSizeProvider } from './contexts/WindowSizeContext'
import { DevVisualizationProvider } from './contexts/DevVisualizationContext'
import GlobalStyle from './styles/globalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <ThemeProvider>
        <DevVisualizationProvider>
          <Router>
            <GlobalStyle />
            <App />
          </Router>
        </DevVisualizationProvider>
      </ThemeProvider>
    </WindowSizeProvider>
  </React.StrictMode>
)
