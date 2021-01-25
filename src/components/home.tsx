// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import BlogList from "./blogList";

import { useFetch } from "./hooks";
import { proxy } from "../constants/proxy";
import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const { data: blogs, isPending, error } = useFetch<IBlog[]>(`${proxy}/blogs`);

  // ---------------------------------------------- content
  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}

      {error && <div>{error}</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
