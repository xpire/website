import React from 'react';
import { Link, graphql } from 'gatsby';

import Main from '../components/Main';

const TagPageTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with `;

  return (
    <Main>
      <h2>
        {tagHeader}
        <Link to={`/blog/tags/${tag}`}>{tag}</Link>
      </h2>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title, date } = node.frontmatter;
          return (
            <li key={slug}>
              <Link
                style={{
                  fontSize: '1.3rem',
                  marginRight: '0.5rem',
                  lineHeight: '1.7',
                }}
                to={slug}
              >
                {title}
              </Link>
              <small>{date}</small>
            </li>
          );
        })}
      </ul>
      <Link to="/blog/tags">All Tags</Link>
    </Main>
  );
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
