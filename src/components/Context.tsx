import React, { createContext, useState } from 'react';

import { COLORS } from '../styles/theme';

export type Settings = {
  page: string;
  setPage: (page: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export const DefaultSettings = {
  page:
    typeof window !== `undefined`
      ? (window.location.pathname.match(/^(\/[^\/]+)/) &&
          window.location.pathname.match(/^(\/[^\/]+)/)[0]) ||
        '/'
      : '/',
  setPage: (page: string) => {},
  theme: undefined,
  // theme: 'light', // getInitialColorMode(), // window.document.documentElement.style.getPropertyValue('--initial-color-mode'),
  setTheme: (theme: 'light' | 'dark') => {},
};

export const SettingsContext = createContext(DefaultSettings);

export const SettingsProvider: React.FC = ({
  children,
}: {
  children: React.ReactChild;
}) => {
  const [page, setPage] = useState(DefaultSettings.page);
  const [theme, setRawTheme] = useState(DefaultSettings.theme);

  React.useEffect(() => {
    const theme = window.document.documentElement.style.getPropertyValue(
      '--initial-color-mode',
    );
    setRawTheme(theme);
  }, []);

  const setTheme = (newValue: string) => {
    // 1. Update React color-mode state
    setRawTheme(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    Object.entries(COLORS[newValue]).forEach(([name, colorByTheme]) => {
      const cssVarName = '--color-' + name;
      if (typeof window !== 'undefined')
        window.document.documentElement.style.setProperty(
          cssVarName,
          colorByTheme as string,
        );
    });
  };

  return (
    <SettingsContext.Provider value={{ page, setPage, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
