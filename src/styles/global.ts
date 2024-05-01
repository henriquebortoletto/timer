import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: clamp(50%, 1.5vw, 62.5%);
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.gray[900]};
      color: ${theme.colors.gray[300]};
    `}

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.font.family.primary};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.medium};
    `}
  }

  :focus {
    outline: 0;
    ${({ theme }) => css`
      box-shadow: 0 0 0 2px ${theme.colors.white},
        0 0 0 5px ${theme.colors.green[300]};
    `}
  }
`;

export default GlobalStyle;
