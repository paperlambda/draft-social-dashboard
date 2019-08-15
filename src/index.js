import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import {Provider} from "react-redux";
import store from './store'

render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </ThemeProvider>,
  document.getElementById('app')
)
