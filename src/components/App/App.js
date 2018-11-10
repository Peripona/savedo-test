import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

class App extends Component {
  render() {
    const { prop } = this.props;
    return (
      <div className={styles.App}>
        <span>{prop}</span>
      </div>
    );
  }
}

App.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default App;
