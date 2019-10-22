import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import history from "./history";

import LandingPage from "./containers/LandingPage/LandingPage";


ReactDOM.render((
  <Router history={history}>
    <Route exact path="/" component={LandingPage} />
  </Router>
), document.getElementById('root'));

