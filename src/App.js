import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import theme from './design-system/theme/index'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <span>Hello World</span>
      </ThemeProvider>
    )
  }
}
