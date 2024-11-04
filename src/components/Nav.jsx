import React from 'react'
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Articles from './Articles'
import Topics from './Topics'
import Home from './Home';
import getArticles from '../../api';


function Nav() {

  return <nav className="nav-bar">
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/topics" className='nav-link'>Topics</Link>
      <Link to="/articles" className='nav-link'> Articles</Link>
      <Link to="/articles/:article_id" element={article_id} className='article-link' />
    </nav>
}

export default Nav

