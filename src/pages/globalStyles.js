import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 100%;
    font-family: 'Montserrat',sans-serif;
  }

  img {
    max-width: 100%;
  }
  


`;



export default GlobalStyle;
