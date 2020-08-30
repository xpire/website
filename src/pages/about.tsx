import React from 'react';
import { PageProps } from 'gatsby';

import Main from '../components/Main';

const Home: React.FC<PageProps> = () => (
  <Main>
    <h1>About</h1>
    <p>
      I'm an 4th year undergraduate studying Bachelor Advanced Maths (Honours) /
      Bachelor Computer Science.
    </p>
    <p>My main interests lie in Machine Learning, Security and Statistics.</p>
    <p>Here are some technologies I've been working with recently:</p>
    <ul>
      <li>React</li>
      <li>Typescript</li>
      <li>Jenkins</li>
      <li>Teamcity</li>
      <li>Tensorflow</li>
      <li>AWS</li>
      <li>GCP</li>
      <li>R</li>
    </ul>
  </Main>
);

export default Home;
