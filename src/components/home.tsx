// ---------------------------------------------- modules import
import { FunctionComponent, useState } from "react";

import BlogList from "./blogList";

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

  // ---------------------------------------------- handlers
  const handleDelete = (id: number) =>
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));

  // ---------------------------------------------- content
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" onDelete={handleDelete} />
    </div>
  );
};

export default Home;
