import React from 'react';
import { PageProps } from 'gatsby';

import Main from '../components/Main';

const Home: React.FC<PageProps> = () => (
  <Main>
    <h1>Projects</h1>
    <p>Here are some projects I've been working on:</p>
  </Main>
);

export default Home;
