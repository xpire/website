import React, { useMemo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

type Props = {
  children: React.ReactNode;
  darkMode: 'light' | 'dark';
};

export const COLORS = {
  light: {
    // background: '#FFFFFF',
    background: '#EDEDED',
    // text: '#000000',
    text: '#363537',
    primary: '#ffa500', // orange
    backdrop: 'rgba(255, 255, 255, 0.7)',
    // gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
  dark: {
    // background: '#000000',
    background: '#363537',
    // text: '#FFFFFF',
    text: '#FAFAFA',
    primary: '#ffa500', // orange
    backdrop: 'rgba(0, 0, 0, 0.7)',
    // gradient: 'linear-gradient(#091236, #1E215D)',
  },
};

export const MyThemeProvider: React.FunctionComponent<Props> = ({
  children,
  darkMode,
}: Props) => {
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: COLORS.light.primary,
          },
          type: darkMode === 'dark' ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    color:  var(--color-text);
    transition: all 0.25s linear;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  p {
    color: var(--color-text);
  }

  a {
    color: var(--color-primary);
  }

  h1,h2,h3,h4,h5,h6 {
    color: var(--color-text);
  }

  svg {
    fill: var(--color-text);
  }

  blockquote {
    border-left: 0.54375rem  solid var(--color-primary);
  }
  `;
