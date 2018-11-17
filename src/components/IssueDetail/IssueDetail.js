import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './IssueDetail.module.css';
import { connect } from 'react-redux';

class IssueDetail extends Component {
  render() {
    const { prop = 'Hello' } = this.props;
    return (
      <div className={styles.IssueDetail}>
        <span>{prop}</span>
        <h1>{this.props.match.params.issueId}</h1>
        <h2>{this.props.selected.number}</h2>
      </div>
    );
  }
}

IssueDetail.propTypes = {
  prop: PropTypes.string.isRequired,
};

const mapsStateToProps = state => {
  const { selected } = state.issues;
  return {
    selected,
  };
};

const IssueDetailConnected = connect(mapsStateToProps)(IssueDetail);

export { IssueDetail, IssueDetailConnected };
