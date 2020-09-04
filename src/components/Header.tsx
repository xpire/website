import React, { useState, useContext } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Switch } from './StyledMaterial';

import { SettingsContext } from './Context';

const data = [
  { name: 'Home', to: '/', size: '1em' },
  { name: 'About', to: '/about', size: '1em' },
  { name: 'Projects', to: '/projects', size: '1em' },
  { name: 'Blog', to: '/blog', size: '1em' },
];

const StyledHeader = styled(motion.header)`
  // min-height: 10vh;
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
  position: relative;
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
  width: 110%;
  left: -5%;
  height: 110%;
  top: -5%;
  border-radius: 0.5em;
  position: absolute;
  mix-blend-mode: difference;
  background-color: white;
  z-index: 102;
  filter: contrast(2);
`;

const StyledLi = styled(motion.li)`
  margin-left: 0.4em;
  position: relative;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  color: var(--color-text);
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
            <StyledLink
              to="/"
              onClick={() => {
                setPage('/');
                setOpen(false);
              }}
            >
              <MobileNavItem variants={item} key={'home'}>
                {''}
              </MobileNavItem>
            </StyledLink>
            {data.map(({ name, to }, i) => {
              return (
                <StyledLink
                  to={to}
                  onClick={() => {
                    setPage(to);
                    setOpen(false);
                  }}
                >
                  <MobileNavItem variants={item} key={i}>
                    {to === page && (
                      <Underline
                        layoutId="underline"
                        // transition={{ type: 'spring', stiffness: '30' }}
                        // style={{
                        //   backdropFilter:
                        //     theme === 'dark' ? 'none' : 'invert(100%)',
                        // }}
                      />
                    )}
                    {name}
                  </MobileNavItem>
                </StyledLink>
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
          {data.map(({ name, size, to }, i) => (
            <StyledLi key={i} style={{ fontSize: size }}>
              {to === page && (
                <Underline
                  layoutId="underline"
                  // transition={{ type: 'spring', stiffness: '30' }}
                  // style={{
                  //   backdropFilter: theme === 'dark' ? 'none' : 'invert(100%)',
                  // }}
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
