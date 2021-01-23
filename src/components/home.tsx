// ---------------------------------------------- modules import
import { FunctionComponent, useEffect, useState } from "react";

import BlogList from "./blogList";

import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  // ---------------------------------------------- effects
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data as IBlog[]));
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
