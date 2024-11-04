import React from 'react'
import { Link } from 'react-router-dom';
import Articles from './Articles'
import Topics from './Topics'
import Home from './Home';


function Nav() {
  return <nav className="nav-bar">
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/categories" className='nav-link'>Topics</Link>
      <Link to="/items" className='nav-link'>Articles</Link>
    </nav>
}

export default Nav