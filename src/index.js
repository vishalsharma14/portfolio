import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import history from "./history";

import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";


ReactDOM.render((
  <Router history={history}>
    <Route exact path="/" component={AboutContainer} />
    <Route exact path="/contact" component={ContactContainer} />
  </Router>
), document.getElementById('root'));

