// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

// ---------------------------------------------- styles import
import "./App.css";

// ---------------------------------------------- the component
const App: FunctionComponent = () => {
  const title = `Welcome to the new blog`;
  const likes = 50;

  // ---------------------------------------------- content
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>

        <p>Liked {likes} times</p>
      </div>
    </div>
  );
};

export default App;
