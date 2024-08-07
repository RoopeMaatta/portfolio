import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './themes'
import { WindowSizeProvider } from './contexts/WindowSizeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <WindowSizeProvider>
        <App />
      </WindowSizeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
