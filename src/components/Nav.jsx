import React from "react";
import { Link, useParams } from "react-router-dom";

function Nav() {
  const topic = useParams();
  return (
    <nav className="nav">
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
