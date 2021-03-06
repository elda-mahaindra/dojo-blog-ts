// ---------------------------------------------- modules import
import { FormEvent, FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";

import { proxy } from "../constants/proxy";
import { IBlogData } from "../models/blog";

import * as ROUTES from "../constants/routes";

// ---------------------------------------------- the component
const Create: FunctionComponent = () => {
  // ---------------------------------------------- router state
  let history = useHistory();

  // ---------------------------------------------- local state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  // ---------------------------------------------- handlers
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blogData: IBlogData = { author, body, title };

    setIsPending(true);

    fetch(`${proxy}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    }).then(() => {
      setIsPending(false);
      history.push(ROUTES.LANDING);
    });
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

        <button disabled={isPending}>
          {isPending ? "Adding blog..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;
