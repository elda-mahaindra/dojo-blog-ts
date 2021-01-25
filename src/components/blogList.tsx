// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { IBlogListProps } from "./common";

import * as ROUTES from "../constants/routes";

// ---------------------------------------------- the component
const BlogList: FunctionComponent<IBlogListProps> = ({ blogs, title }) => (
  <div className="blog-list">
    <h2>{title}</h2>

    {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <Link to={`${ROUTES.BLOGS}/${blog.id.toString()}`}>
          <h2>{blog.title}</h2>

          <p>written by {blog.author}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default BlogList;
