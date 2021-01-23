// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

// ---------------------------------------------- styles import
import "./App.css";

// ---------------------------------------------- the component
const App: FunctionComponent = () => {
  const title = `Welcome to the new blog`;
  const likes = 50;

  const link = "http://www.google.com";

  // ---------------------------------------------- content
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>

        <p>Liked {likes} times</p>

        <p>{10}</p>

        <p>{"hello, ninjas!"}</p>

        <p>{[1, 2, 3, 4, 5]}</p>

        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
};

export default App;
