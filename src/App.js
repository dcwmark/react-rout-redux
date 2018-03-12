import './App.css';

import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Todos from './Components/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Homes</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/todos">Todos</Link></li>

          </ul>
        </nav>

        <Route exact={ true } path="/" component={ Home }/>
        <Route path="/posts" component={ Posts }/>
        <Route path="/comments" component={ Comments }/>
        <Route path="/todos" component={ Todos }/>
      </div>
    );
  }
}

export default App;
