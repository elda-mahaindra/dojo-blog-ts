// ---------------------------------------------- modules import
import { FunctionComponent, useState } from "react";

// ---------------------------------------------- the component
const Home: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  // ---------------------------------------------- handlers
  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  // ---------------------------------------------- content
  return (
    <div className="home">
      <h2>Homepage</h2>

      <p>
        {name} is {age} years old
      </p>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
