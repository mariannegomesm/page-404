import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
)

export default App
