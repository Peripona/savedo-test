import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotFound.css';

class NotFound extends Component {
  render() {
    const { prop = 'Not Found' } = this.props;
    return (
      <div className="NotFound">
        <span>{prop}</span>
      </div>
    );
  }
}

NotFound.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default NotFound;
