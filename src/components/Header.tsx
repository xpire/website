import React, { useState, useContext } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Switch } from '@material-ui/core';

// import Link from './Link';
import { SettingsContext } from './Context';
import { lightTheme } from '@/styles/theme';

const data = [
  { name: 'Home', color: 'blue', to: '/' },
  { name: 'About', color: 'red', to: '/about' },
  { name: 'Projects', color: 'green', to: '/projects' },
  { name: 'Blog', color: 'orange', to: '/blog' },
];

const StyledHeader = styled(motion.header)`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
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
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuIcon = ({ onClick }: { onClick: () => void }) => (
  <StyledMenuIcon onClick={onClick}>
    <motion.svg width="40" height="40" viewBox="0 0 24 24">
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
  background-color: var(--color-backdrop);
  backdrop-filter: blur(5px);
`;

const MobileNavItem = styled(motion.li)`
  margin-left: 0.4em;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  padding: 20px;
  margin: 20px;
`;

const BigNavigation = styled(motion.ol)`
  list-style: none;
  padding: 0px 20px;
  margin: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
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
  color: var(--color-text);
  background-image: none;
  text-shadow: none;
`;

const MyHeader = () => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLink
        to={'/'}
        onClick={() => {
          setPage('/');
        }}
      >
        <StyledTitle>Justin Or</StyledTitle>
      </StyledLink>
      <MenuIcon
        onClick={() => {
          setOpen(!isOpen);
        }}
      />
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}
            onClick={() => setOpen(false)}
          >
            {data.map(({ name, to }, i) => {
              return (
                <MobileNavItem variants={item} key={i}>
                  <StyledLink
                    to={to}
                    onClick={() => {
                      setPage(to);
                      setOpen(false);
                    }}
                  >
                    {name}
                  </StyledLink>
                </MobileNavItem>
              );
            })}
            <MobileNavItem variants={item}>
              <Switch
                checked={theme === 'light' ? false : true}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  e.stopPropagation()
                }
                onChange={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                }}
              />
            </MobileNavItem>
          </Backdrop>
        )}
      </AnimatePresence>
      <AnimateSharedLayout>
        <BigNavigation>
          {data.map(({ name, color, to }, i) => (
            <StyledLi
              initial={{ fontSize: '1em', color: 'black' }}
              animate={{
                color: to === page ? color : 'black',
              }}
              key={i}
            >
              {to === page && (
                <Underline
                  layoutId="underline"
                  style={{ backgroundColor: color }}
                />
              )}
              <StyledLink
                to={to}
                onClick={() => {
                  setPage(to);
                }}
              >
                {name}
              </StyledLink>
            </StyledLi>
          ))}
          <StyledLi>
            <Switch
              checked={theme === 'light' ? false : true}
              onChange={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            />
          </StyledLi>
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
