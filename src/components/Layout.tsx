import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from '../styles/theme';
import Header from './Header';
import Footer from './Footer';
import { DefaultSettings, SettingsContext, SettingsProvider } from './Context';

const Section = styled(motion.section)``;

const PageContents = styled(motion.div)`
  max-width: 1100px;
  margin: auto;
`;

const MyThemeProvider: React.FC = ({ children }) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

const Layout: React.FC = ({ children }) => {
  return (
    <SettingsProvider>
      <MyThemeProvider>
        <GlobalStyles />
        <PageContents>
          <Header />
          <div style={{ minHeight: '75vh' }}>
            <Section>{children}</Section>
          </div>
          <Footer />
        </PageContents>
      </MyThemeProvider>
    </SettingsProvider>
  );
};

export default Layout;
