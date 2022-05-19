import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const GlobalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;

    // theme colors
    --theme-pink: #F6486C;
    --theme-orange: #F58331;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  h1 {
    font-size: 3.375rem;
  }
`;

export default withTheme(GlobalStyle);
