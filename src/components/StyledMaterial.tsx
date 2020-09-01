import React, { useContext } from 'react';
import {
  Grid as MGrid,
  Input as Minput,
  Switch as MSwitch,
  Chip as MChip,
  TextField as MTextField,
} from '@material-ui/core';

import { MyThemeProvider } from '../styles/theme';
import { SettingsContext } from '../components/Context';

export const Grid = MGrid;

export const Input = (props) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <Minput {...props} />
    </MyThemeProvider>
  );
};

export const TextField = (props) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MTextField {...props} />
    </MyThemeProvider>
  );
};

export const Switch = (props) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MSwitch {...props} />
    </MyThemeProvider>
  );
};

export const Chip = (props) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MChip {...props} />
    </MyThemeProvider>
  );
};
