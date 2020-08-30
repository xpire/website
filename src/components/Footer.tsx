import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Footers contain useless information </p>
    </StyledFooter>
  );
};

export default Footer;
