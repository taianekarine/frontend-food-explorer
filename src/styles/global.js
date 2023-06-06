import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    display: grid;
    justify-content: center;
    height: 100vh;
  }

  main {
    width: 42.8rem;
    overflow: hidden;
    
    @media (min-width: 900px) {
      width: 136.8rem;
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.FONT.POPPINS};

  }

  button {
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(1.1);
  }
`