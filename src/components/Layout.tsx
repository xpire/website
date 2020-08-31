import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { GlobalStyles } from '../styles/theme';
import Header from './Header';
import Footer from './Footer';
import { SettingsProvider } from './Context';

const Section = styled(motion.section)``;

const PageContents = styled(motion.div)`
  max-width: 1100px;
  margin: auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <SettingsProvider>
      <GlobalStyles />
      <PageContents>
        <Header />
        <div style={{ minHeight: '75vh' }}>
          <Section>{children}</Section>
        </div>
        <Footer />
      </PageContents>
    </SettingsProvider>
  );
};

export default Layout;
