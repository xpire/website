import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Grid } from '@material-ui/core';

import Main from '../../components/Main';
import Chip from '../../components/Chip';

const Home: React.FC<PageProps> = ({ data }) => {
  const blogTagsList = data.allMarkdownRemark.group;

  return (
    <Main>
      <h2>Blog</h2>
      <p>Here are some things I have written about</p>
      <Grid container spacing={1}>
        {blogTagsList.map((tag) => (
          <Grid item key={tag.fieldValue}>
            <Chip
              key={tag.fieldValue}
              link={tag.fieldValue}
              label={`${tag.fieldValue} (${tag.totalCount})`}
            />
          </Grid>
        ))}
      </Grid>
    </Main>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
