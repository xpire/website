import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { SettingsContext } from './Context';

type Props = {
  to: string;
};

const Link = ({ to }: Props) => {
  const { page, setPage, theme, setTheme } = useContext(SettingsContext);
  return (
    <GatsbyLink
      to={to}
      onClick={() => {
        setPage(to);
      }}
    ></GatsbyLink>
  );
};

export default Link;
