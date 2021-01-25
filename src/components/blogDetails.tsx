// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useFetch } from "./hooks";
import { proxy } from "../constants/proxy";
import { IBlog } from "../models/blog";

import * as ROUTES from "../constants/routes";

// ---------------------------------------------- the component
const BlogDetails: FunctionComponent = () => {
  // ---------------------------------------------- router state
  const { blog_id } = useParams<{ blog_id: string }>();
  let history = useHistory();

  // ---------------------------------------------- local state
  const { data: blog, isPending, error } = useFetch<IBlog>(
    `${proxy}/blogs/${blog_id}`
  );

  // ---------------------------------------------- handlers
  const handleClick = () => {
    fetch(`${proxy}/blogs/${blog_id}`, { method: "DELETE" }).then(() => {
      history.push(ROUTES.LANDING);
    });
  };

  // ---------------------------------------------- content
  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}

      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>

          <p>Written by {blog.author}</p>

          <div>{blog.body}</div>

          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
