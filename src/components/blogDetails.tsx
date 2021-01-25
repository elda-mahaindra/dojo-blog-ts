// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

// ---------------------------------------------- the component
const BlogDetails: FunctionComponent = () => {
  // ---------------------------------------------- router state
  const { blog_id } = useParams<{ blog_id: string }>();

  // ---------------------------------------------- content
  return (
    <div className="blog-details">
      <h2>Blog details - {blog_id}</h2>
    </div>
  );
};

export default BlogDetails;
