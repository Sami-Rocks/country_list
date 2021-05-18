import { createGlobalStyle } from "styled-components";
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    headerBackground: string;
    cardBackground: string;
    background: string;
  }
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};

        transition: all 0.3s linear;
    }
    .card{
      background: ${({ theme }) => theme.cardBackground};
    }
    header{
      background: ${({ theme }) => theme.headerBackground}
    }
`