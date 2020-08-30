import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a,p {
    color: ${({ theme }) => theme.text};
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.text};
  }
  `;

export const lightTheme = {
  body: '#FFFFFF', //'#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  backdrop: 'rgba(255, 255, 255, 0.7)',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  backdrop: 'rgba(0, 0, 0, 0.7)',
  gradient: 'linear-gradient(#091236, #1E215D)',
};
