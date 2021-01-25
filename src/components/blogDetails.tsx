// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "./hooks";
import { proxy } from "../constants/proxy";
import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const BlogDetails: FunctionComponent = () => {
  // ---------------------------------------------- router state
  const { blog_id } = useParams<{ blog_id: string }>();

  // ---------------------------------------------- local state
  const { data: blog, isPending, error } = useFetch<IBlog>(
    `${proxy}/blogs/${blog_id}`
  );

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
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
