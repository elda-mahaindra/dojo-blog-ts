// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

// ---------------------------------------------- the component
const NotFound: FunctionComponent = () => (
  <div className="not-found">
    <h2>Sorry</h2>

    <p>That page cannot be found.</p>

    <Link to={ROUTES.LANDING}>Back to the homepage...</Link>
  </div>
);

export default NotFound;
