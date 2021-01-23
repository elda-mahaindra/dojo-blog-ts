// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import BlogList from "./blogList";

import { useFetch } from "./hooks";
import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  const { data: blogs, isPending, error } = useFetch<IBlog>(
    "http://localhost:8000/blogs"
  );

  // ---------------------------------------------- content
  return (
    <div className="home">
      {error && <div>{error}</div>}

      {isPending && <div>Loading ...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
