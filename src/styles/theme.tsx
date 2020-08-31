import { createGlobalStyle } from 'styled-components';

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

  h1,h2,h3,h4,h5,h6 {
    color: var(--color-text);
  }

  svg {
    fill: var(--color-text);
  }
  `;

// export const lightTheme = {
//   body: '#FFFFFF', //'#E2E2E2',
//   text: '#363537',
//   toggleBorder: '#FFF',
//   backdrop: 'rgba(255, 255, 255, 0.7)',
//   gradient: 'linear-gradient(#39598A, #79D7ED)',
// };

// export const darkTheme = {
//   body: '#363537',
//   text: '#FAFAFA',
//   toggleBorder: '#6B8096',
//   backdrop: 'rgba(0, 0, 0, 0.7)',
//   gradient: 'linear-gradient(#091236, #1E215D)',
// };

export const COLORS = {
  light: {
    background: '#FFFFFF', //'#E2E2E2',
    text: '#363537',
    primary: 'blue',
    toggleBorder: '#FFF',
    backdrop: 'rgba(255, 255, 255, 0.7)',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  },
  dark: {
    background: '#363537',
    text: '#FAFAFA',
    primary: 'red',
    toggleBorder: '#6B8096',
    backdrop: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(#091236, #1E215D)',
  },
};
