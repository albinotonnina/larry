import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from './design-system/constants'
import Documents from './layouts/Documents'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Documents />
  </ThemeProvider>,
  document.getElementById('root')
)
