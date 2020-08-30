import React from 'react';
import { PageProps } from 'gatsby';

import Main from '../components/Main';

const Home: React.FC<PageProps> = () => (
  <Main>
    <h2>Hello!</h2>
    <p>
      I'm a software developer with a passion for <code>algorithms</code>,{' '}
      <cite>maths</cite> and everything in between!
    </p>
    <p>
      In pursuit for better mobile support, I rebuilt my website mobile first on
      top of Gatsby + typescript.{' '}
    </p>
    <p>
      If you use this site in mobile, you might see some really nice animations
      :D{' '}
    </p>
  </Main>
);

export default Home;
