// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- the component
  const handleClick = () => {
    console.log("hello, ninjas!");
  };

  const handleClickAgain = (name: string) => {
    console.log(`hello, ${name}`);
  };

  // ---------------------------------------------- content
  return (
    <div className="home">
      <h2>Homepage</h2>

      <button onClick={handleClick}>Click me</button>

      <button onClick={() => handleClickAgain("mario")}>Click me again</button>
    </div>
  );
};

export default Home;
