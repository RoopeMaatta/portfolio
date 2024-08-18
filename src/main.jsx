import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './themes'
import { WindowSizeProvider } from './contexts/WindowSizeContext'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <WindowSizeProvider>
        <App />
      </WindowSizeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
