// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

// Routers
import Router from './router/Router'

// Themes
import { theme } from './themes/mainTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  </React.StrictMode>
)
