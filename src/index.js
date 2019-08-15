import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

render(
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
  </>,
  document.getElementById('app')
)
