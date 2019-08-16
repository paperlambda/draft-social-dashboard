import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
