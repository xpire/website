import React, { useContext, createContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Section = styled(motion.section)``;

type Props = {
  initialSelected: number;
};

const PageContents = styled(motion.div)`
  max-width: 1100px;
  margin: auto;
`;

export type Settings = {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  logout: () => void;
};

export const SettingsContext = createContext({});

const Layout: React.FC<Props> = ({ children, initialSelected }) => {
  return (
    <PageContents>
      <Header initialSelected={initialSelected} />
      <div style={{ minHeight: '75vh' }}>
        <Section>{children}</Section>
      </div>
      <Footer />
    </PageContents>
  );
};

export default Layout;
