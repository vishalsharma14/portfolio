import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import history from "./history";

import AboutContainer from "./containers/AboutContainer/AboutContainer";


ReactDOM.render((
  <Router history={history}>
    <Route exact path="/" component={AboutContainer} />
  </Router>
), document.getElementById('root'));

