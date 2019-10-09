import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Practice from './components/Practice/Practice';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Gallery from './components/Gallery/Gallery';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div id="navbar" className="sticky">
          <div className="logo">
            <img src="https://sounder.fm/img/logo-color.png" alt="" height="35" />
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path='/practice' component={Practice} />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
          <Route path="/gallery" component={Gallery} />
        </div>
        
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <h2>Home page.</h2>
    </div>
  );
}

export default App;
