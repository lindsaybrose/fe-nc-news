import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/topics" className="nav-link">
        Topics
      </Link>
      <Link to="/articles" className="nav-link">
        Articles
      </Link>
    </nav>
  );
}

export default Nav;
