import React, { useState } from 'react';
import { PageProps, Link, graphql, navigate } from 'gatsby';
import { Grid } from '@material-ui/core';

import Main from '../components/Main';
import Chip from '../components/Chip';
import { Input, TextField } from '../components/StyledMaterial';

const Home: React.FC<PageProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const emptyQuery = '';
  const [search, setSearch] = useState({
    filteredData: posts,
    query: emptyQuery,
  });
  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredData = posts.filter((post) => {
      const { description, title, tags } = post.node.frontmatter;
      return (
        (description && description.toLowerCase().includes(query)) ||
        (title && title.toLowerCase().includes(query)) ||
        (tags &&
          tags
            .join('') // convert tags from an array to string
            .toLowerCase()
            .includes(query))
      );
    });
    setSearch({ filteredData, query });
  };

  return (
    <Main>
      <h2>Blog</h2>
      <Link to="/blog/tags">See all tags</Link>
      <p>Here are some things I have written about:</p>
      <TextField
        type="text"
        aria-label="Search"
        label="Search Posts"
        onChange={handleInputChange}
      />
      {search.filteredData.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <Grid container spacing={1}>
                {node.frontmatter.tags.map((elem) => (
                  <Grid key={elem} item>
                    <Chip link={elem} />
                  </Grid>
                ))}
              </Grid>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
