// ---------------------------------------------- modules import
import { FunctionComponent, useState } from "react";

import { IBlog } from "../models/blog";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [blogs, setBlogs] = useState<IBlog[]>([
    { id: 1, author: "mario", body: "lorem ipsum...", title: "My new website" },
    { id: 2, author: "yoshi", body: "lorem ipsum...", title: "Welcome party!" },
    {
      id: 3,
      author: "mario",
      body: "lorem ipsum...",
      title: "Web dev top tips",
    },
  ]);

  // ---------------------------------------------- content
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>

          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
