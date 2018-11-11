import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Issues.css';

class Issues extends Component {
  render() {
    const { prop } = this.props;
    return (
      <div className={styles.Issues}>
        <span>{prop}</span>
      </div>
    );
  }
}

Issues.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Issues;
