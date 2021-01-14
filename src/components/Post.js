import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "gatsby";

const Post = ({ title, author, path, date, body }) => (
  <Card>
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
