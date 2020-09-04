import React, { useContext } from 'react';
import {
  Grid as MGrid,
  Switch as MSwitch,
  Chip as MChip,
  TextField as MTextField,
} from '@material-ui/core';

import { MyThemeProvider } from '../styles/theme';
import { SettingsContext } from '../components/Context';

export const Grid = MGrid;

export const TextField = (props) => {
  const { theme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MTextField {...props} />
    </MyThemeProvider>
  );
};

export const Switch = (props) => {
  const { theme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MSwitch {...props} />
    </MyThemeProvider>
  );
};

export const Chip = (props) => {
  const { theme } = useContext(SettingsContext);
  return (
    <MyThemeProvider darkMode={theme}>
      <MChip {...props} />
    </MyThemeProvider>
  );
};
