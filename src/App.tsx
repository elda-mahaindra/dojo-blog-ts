// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import Home from "./components/home";
import Navbar from "./components/navbar";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <div className="App">
    <Navbar />

    <div className="content">
      <Home />
    </div>
  </div>
);

export default App;
