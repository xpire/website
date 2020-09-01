import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMain = styled(motion.main)`
  padding: 0px 10px;
`;

const MyMain: React.FC = ({ children }) => {
  return (
    <StyledMain
    // animate={{ y: 0, opacity: 1 }}
    // initial={{ y: 10, opacity: 0 }}
    // exit={{ y: -10, opacity: 0 }}
    // transition={{ type: 'spring', stiffness: 200 }} //apply animations for every page here
    >
      {children}
    </StyledMain>
  );
};

export default MyMain;
