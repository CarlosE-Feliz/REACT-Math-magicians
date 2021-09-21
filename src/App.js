/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  const styles = [
    {
      display: 'flex',
      justifyContent: 'space-around',
    },

    {
      margin: '20px',
    },

    {
      listStyle: 'none', display: 'flex',
    },

    {
      textDecoration: 'none', fontFamily: 'Franklin Gothic Medium', color: 'wheat',
    },
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    {
      fontFamily: 'Franklin Gothic Medium',
    },
  ];
  return (
    <Router>
      <div style={styles[4]}>
        <div style={styles[0]}>
          <h1 style={styles[5]}> Math Magicians</h1>
          <nav>
            <ul style={styles[2]}>
              <li style={styles[1]}>
                <Link style={styles[3]} to="/">Home</Link>
              </li>
              <li style={styles[1]}>
                <Link style={styles[3]} to="/calculator">Calculator</Link>
              </li>
              <li style={styles[1]}>
                <Link style={styles[3]} to="/quotes">Quotes</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
