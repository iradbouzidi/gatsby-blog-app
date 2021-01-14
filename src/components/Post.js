import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Post = ({ title, author, path, date, body, fluid }) => (
  <Card>
    <Link to={path}>
      <Img className="card-image-top" fluid={fluid} />
    </Link>

    <CardBody>
      <CardTitle>
        <Link to={path}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> by{" "}
        <span className="text-info">{author}</span>
      </CardSubtitle>
      <CardTitle>{body}</CardTitle>
      <Link to={path} className="btn btn-outline-primary float-right">
        Read more
      </Link>
    </CardBody>
  </Card>
);

export default Post;
