// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BlogDetails from "./components/blogDetails";
import Create from "./components/create";
import Home from "./components/home";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";

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

          <Route path={`${ROUTES.BLOGS}/:blog_id`} component={BlogDetails} />

          <Route path={ROUTES.OTHERS} component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
