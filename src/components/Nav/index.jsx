import React from 'react';
import About from '../About';
import Home from '../Home';
// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';


import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            {/* Your link to home here */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Your link to about here */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        {/* Your Routes Here */}
        <Route exact path="/">
           <Home />
        </Route>
        <Route exact path="/about">
           <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;