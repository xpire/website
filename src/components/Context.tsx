import React, { createContext, useState, useEffect } from 'react';

import { COLORS } from '../styles/theme';
import { match } from 'assert';

export type Settings = {
  page: string;
  setPage: (page: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export const DefaultSettings = {
  page: undefined,
  setPage: (page: string) => {},
  theme: undefined,
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

  useEffect(() => {
    const theme = window.document.documentElement.style.getPropertyValue(
      '--initial-color-mode',
    );
    setRawTheme(theme);
    const matchPage = window.location.pathname.match(/^(\/[^\/]+)/);
    setPage((matchPage && matchPage[0]) || '/');
  }, []);

  const setTheme = (newValue: string) => {
    // 1. Update React color-mode state
    setRawTheme(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    Object.entries(COLORS[newValue]).forEach(([name, colorByTheme]) => {
      const cssVarName = '--color-' + name;
      if (typeof window !== 'undefined') {
        window.document.documentElement.style.setProperty(
          cssVarName,
          colorByTheme as string,
        );
      }
    });
  };

  return (
    <SettingsContext.Provider value={{ page, setPage, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
