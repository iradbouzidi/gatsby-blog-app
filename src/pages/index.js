import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page.</h1>
    <StaticQuery
      query={indexQuery}
      render={(data) => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                body={node.excerpt}
                //date={node.frontmatter.date}
              />
            ))}
          </div>
        );
      }}
    />
  </Layout>
);

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
