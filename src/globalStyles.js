import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #e7e7e7;
    margin: 0;
  }

  a {
    color: #0dac67;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #0dac67;
    }

    &:visited {
      color: #0dac67
    } 
  }
`
