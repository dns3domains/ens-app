import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: #F4F0dd;
    margin: 0;
  }

  a {
    color: #5284ff;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #2C46A6;
    }

    &:visited {
      color: #333333
    } 
  }
`
