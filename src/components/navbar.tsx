// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

// ---------------------------------------------- the component
const Navbar: FunctionComponent = () => (
  <nav className="navbar">
    <h1>The Dojo Blog</h1>

    <div className="links">
      <a href="/">Home</a>

      <a href="/create">New Blog</a>
    </div>
  </nav>
);

export default Navbar;
