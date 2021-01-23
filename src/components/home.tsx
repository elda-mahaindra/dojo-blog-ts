// ---------------------------------------------- modules import
import { FunctionComponent, useEffect, useState } from "react";

import BlogList from "./blogList";

import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [blogs, setBlogs] = useState<IBlog[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ---------------------------------------------- effects
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from that resource.");
          }

          return res.json();
        })
        .then((data) => {
          setBlogs(data as IBlog[]);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

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
