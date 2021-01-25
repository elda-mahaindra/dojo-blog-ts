// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./components/create";
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
          <Route exact path={ROUTES.LANDING} component={Home} />

          <Route path={ROUTES.CREATE} component={Create} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
