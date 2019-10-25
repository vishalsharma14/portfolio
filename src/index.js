import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import history from "./history";

import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import ProjectContainer from "./containers/ProjectContainer/ProjectContainer";


ReactDOM.render((
  <Router history={history}>
    <Route exact path="/" component={AboutContainer} />
    <Route exact path="/projects" component={ProjectContainer} />
    <Route exact path="/contact" component={ContactContainer} />
  </Router>
), document.getElementById('root'));

