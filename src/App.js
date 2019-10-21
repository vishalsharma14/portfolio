import React from 'react';
import { connect } from 'react-redux';

import './styles/App.scss'

// import Components
import DiabeticRetinopathy from './Views/DiabeticRetinopathy'


function App() {
  return (
    <div className="App">


    </div>
  );
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
