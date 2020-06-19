import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../components/auth/Auth';
import Home from '../components/home/Home';
import RouterConfig from '../infrastructure/router/config.json';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RouterConfig.Home} component={Home}>
        </Route>
        <Route path={RouterConfig.Auth.path} component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;
