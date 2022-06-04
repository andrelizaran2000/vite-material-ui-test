// Modules
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

// Routers
import Router from './router/Router'

// Themes
import { theme } from './themes/mainTheme'

// Store
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
