// ---------------------------------------------- modules import
import { FunctionComponent, useEffect, useState } from "react";

import BlogList from "./blogList";

import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [blogs, setBlogs] = useState<IBlog[] | null>(null);
  const [isPending, setIsPending] = useState(true);

  // ---------------------------------------------- effects
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data as IBlog[]);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
