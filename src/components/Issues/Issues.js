import React, { Component } from 'react';
import styles from './Issues.css';
import { connect } from 'react-redux';
import { searchRequest } from '../../state/issues/actions';

const issuesUrl = 'https://api.github.com/repos/facebook/react/issues';

class Issues extends Component {
  componentDidMount() {
    this.props.dispatch(searchRequest({ url: issuesUrl }));
  }
  render() {
    const { fetching, data } = this.props;
    return (
      <div className={styles.Issues}>
        {fetching && 'Loading...'}
        {data && data.map(result => <div key={result.id}>{result.number}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { fetching, data } = state.issues;
  return {
    fetching,
    data,
  };
};

const IssuesConnected = connect(mapStateToProps)(Issues);

export { Issues, IssuesConnected };
