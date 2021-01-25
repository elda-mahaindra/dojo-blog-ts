// ---------------------------------------------- modules import
import { FormEvent, FunctionComponent, useState } from "react";

import { IBlogData } from "../models/blog";

// ---------------------------------------------- the component
const Create: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  // ---------------------------------------------- handlers
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blogData: IBlogData = { author, body, title };

    console.log(blogData);
  };

  // ---------------------------------------------- content
  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>

        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>

        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog author:</label>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>

          <option value="yoshi">yoshi</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
