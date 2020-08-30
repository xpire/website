import React, { createContext, useState } from 'react';

export type Settings = {
  page: string;
  setPage: (page: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
}

export const DefaultSettings = {
  page:
    typeof window !== 'undefined'
      ? (window.location.pathname.match(/^(\/[^\/]+)/) &&
          window.location.pathname.match(/^(\/[^\/]+)/)[0]) ||
        '/'
      : '/',
  setPage: (page: string) => {},
  // theme:
  //   typeof window !== 'undefined'
  //     ? window.document.documentElement.style.getPropertyValue(
  //         '--initial-color-mode',
  //       )
  //     : 'light',
  theme: 'light', // getInitialColorMode(), // window.document.documentElement.style.getPropertyValue('--initial-color-mode'),
  setTheme: (theme: 'light' | 'dark') => {},
};

export const SettingsContext = createContext(DefaultSettings);

export const SettingsProvider: React.FC = ({
  children,
}: {
  children: React.ReactChild;
}) => {
  const [page, setPage] = useState(DefaultSettings.page);
  const [theme, setTheme] = useState(DefaultSettings.theme);
  return (
    <SettingsContext.Provider value={{ page, setPage, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
