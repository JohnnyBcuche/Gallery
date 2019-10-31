import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Practice from './components/Practice/Practice';
import Example from './components/Example/Example';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Login from './LoginForm';

import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <div id="navbar" className="sticky">
            <Link to="/">
              <div className="logo">
                <img src="https://sounder.fm/img/logo-color.png" alt="" height="35" />
              </div>
            </Link>
            <ul className="menu">
              <li>
                <Link to="/practice">Practice</Link>
              </li>
              {/* <li>
                <Link to="/example">Example</Link>
              </li> */}
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact</Link>
              </li> */}
              <li>
                <Link to="/login">ૐ Login</Link>
              </li>
            </ul>
          </div>
        
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path='/practice' component={Practice} />
            <Route path='/example' component={Example} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </div>
          
        </div>
      </Router>
    );
  }
}

function Home() {
  return(
    <div>
      <h2>Home page.</h2>
    </div>
  );
}

export default App;
