import React from 'react';
import { Link, graphql, navigate } from 'gatsby';

import { Grid } from '@material-ui/core';
import Main from '../components/Main';
import Chip from '../components/Chip';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Main>
      <article>
        <header>
          <h2
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h2>
          <Grid container spacing={1}>
            {post.frontmatter.tags.map((elem) => (
              <Grid key={elem} item>
                <Chip link={elem} />
              </Grid>
            ))}
          </Grid>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Main>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
