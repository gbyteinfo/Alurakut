import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraCommons'

const GlobalStyle = createGlobalStyle`
  /* RESET CSS */  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  body {
    font-family:sans-serif;
    background-color: #0C0E10;
  }
  #__next{
    display:flex;
    min-height:100vh;
    flex-direction:column;
  }
  img{
    max-width:100%;
    height:auto;
    display:block;
  }
  ${AlurakutStyles}
`
const theme = {
  colors: {
    primary: 'black',
  },
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
