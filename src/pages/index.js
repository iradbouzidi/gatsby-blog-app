import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Row, Col } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page.</h1>
    <Row>
      <Col md={8}>
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
                    date={node.frontmatter.date}
                    path={node.frontmatter.path}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />
                ))}
              </div>
            );
          }}
        />
      </Col>
      <Col md={4}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></div>
      </Col>
    </Row>
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
            path
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
