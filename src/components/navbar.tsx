// ---------------------------------------------- modules import
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

// ---------------------------------------------- the component
const Navbar: FunctionComponent = () => (
  <nav className="navbar">
    <h1>The Dojo Blog</h1>

    <div className="links">
      <Link to={ROUTES.LANDING}>Home</Link>

      <Link to={ROUTES.CREATE}>New Blog</Link>
    </div>
  </nav>
);

export default Navbar;
