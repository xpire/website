import React from 'react';
import { PageProps } from 'gatsby';

import Main from '../components/Main';

const Home: React.FC<PageProps> = () => (
  <Main>
    <h2>Projects</h2>
    <p>Here are some projects I&apos;ve been working on:</p>
  </Main>
);

export default Home;
