// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";

import * as ROUTES from "./constants/routes";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route path={ROUTES.LANDING} component={Home} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
