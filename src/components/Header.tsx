import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'gatsby';

const data = [
  { name: 'Home', color: 'blue', to: '/' },
  { name: 'About', color: 'red', to: '/about' },
  { name: 'Projects', color: 'green', to: '/projects' },
  { name: 'Blog', color: 'orange', to: '/blog' },
];

const StyledHeader = styled(motion.header)`
  background-color: #efefef; //#282c34;
  // color: black;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
`;

const StyledTitle = styled(motion.h1)`
  pointer-events: none;
  white-space: nowrap;
  margin: 10px;
`;

const StyledMenuIcon = styled(motion.div)`
  max-height: 2em;
  padding: 10px;
  z-index: 101;

  @media (min-width: 500px) {
    display: none;
  }
`;

const MenuIcon = ({ onClick }: { onClick: () => void }) => (
  <StyledMenuIcon onClick={onClick}>
    <motion.svg width="20" height="20">
      <motion.path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </motion.svg>
  </StyledMenuIcon>
);

const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
`;

const MobileNavItem = styled(motion.li)`
  margin-left: 0.4em;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  margin: 20px;
`;

const BigNavigation = styled(motion.ol)`
  list-style: none;
  padding: 20px;
  margin: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const item = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -50,
    opacity: 0,
  },
};

const Underline = styled(motion.div)`
  width: 100%;
  height: 0.1em;
  border-radius: 0.05em;
  background: black;
  position: absolute;
  bottom: -0.05em;
`;

const StyledLi = styled(motion.li)`
  margin-left: 0.4em;
  position: relative;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MyHeader = ({
  initialSelected,
  location,
}: {
  initialSelected?: number;
  location: any;
}) => {
  const [selected, setSelected] = useState(initialSelected || 0);
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledTitle>Justin Or</StyledTitle>
      <MenuIcon
        onClick={() => {
          setOpen(!isOpen);
          console.log(isOpen);
        }}
      />
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
          >
            {data.map(({ name, to }, i) => (
              <MobileNavItem variants={item} key={i}>
                <StyledLink
                  to={to}
                  onClick={() => {
                    setSelected(i);
                    setOpen(false);
                  }}
                >
                  {name}
                </StyledLink>
              </MobileNavItem>
            ))}
          </Backdrop>
        )}
      </AnimatePresence>
      <AnimateSharedLayout>
        <BigNavigation>
          {data.map(({ name, color, to }, i) => (
            <StyledLi
              initial={{ fontSize: '1em', color: 'black' }}
              animate={{
                color: i === selected ? color : 'black',
              }}
              key={i}
            >
              {i === selected && (
                <Underline
                  layoutId="underline"
                  style={{ backgroundColor: color }}
                />
              )}
              <StyledLink
                to={to}
                onClick={() => {
                  setSelected(i);
                }}
              >
                {name}
              </StyledLink>
            </StyledLi>
          ))}
        </BigNavigation>
      </AnimateSharedLayout>
    </StyledHeader>
  );
};

export default styled(MyHeader)`
  @media (min-width: 600px) {
    min-height: 30vh;
  }
`;
