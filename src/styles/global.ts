import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
  
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      img{
        vertical-align: middle;
        border-radius: 5px;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 600;
      }

      h2 {
        font-size: 1.6rem;
        font-weight: 500;
      }

      button,label, input, textarea{
        font-family: ${theme.font.family};
        font-weight: 500;
        font-size: 1.4rem;
      }

      body {
        background: ${theme.colors.white};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
    `}


    .ReactModal__Content{     
      @media screen and (max-width: 1024px) {
        width: 80% !important;
      }

      @media screen and (max-width: 580px) {
        width: 90% !important;
      }
    }
  `;

export default GlobalStyles;
