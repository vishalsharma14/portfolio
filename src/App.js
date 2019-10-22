import React from 'react';
import { connect } from 'react-redux';

import styles from "styles/main.scss";

function App() {
  return (
    <div className={styles.container}>

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
