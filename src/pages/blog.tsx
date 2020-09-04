import React, { useState } from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import Main from '../components/Main';
import Chip from '../components/Chip';
import { TextField } from '../components/StyledMaterial';
import GatsbyPlaceholder from './gatsby-icon.png';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ThumbnailDiv = styled.div`
  padding: 1rem 0rem;
`;

const ContentDiv = styled.div`
  padding: 1rem;
  text-align: left;
`;

const StyledH3 = styled.h3`
  margin-top: 0px;
`;

const Home: React.FC<PageProps> = ({ data }) => {
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
          <StyledArticle key={node.fields.slug}>
            <ThumbnailDiv>
              <Link to={node.fields.slug}>
                {node.frontmatter.thumbnail ? (
                  <Img
                    fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                  />
                ) : (
                  <img
                    style={{
                      maxWidth: '200px',
                      maxHeight: '200px',
                      minWidth: '200px',
                      minHeight: '200px',
                    }}
                    src={GatsbyPlaceholder}
                  />
                )}
              </Link>
            </ThumbnailDiv>
            <ContentDiv>
              <header>
                <StyledH3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </StyledH3>
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
            </ContentDiv>
          </StyledArticle>
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
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
