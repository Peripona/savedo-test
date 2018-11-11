import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Issues.css';
import { connect } from 'react-redux';
import { fetchIssues } from '../../state/issues/actions';

class Issues extends Component {
  componentDidMount() {
    this.props.dispatch(fetchIssues('Singh'));
  }
  render() {
    const { loading } = this.props;
    return (
      <div className={styles.Issues}>
        <span>Loading {loading ? 'True' : 'False'}</span>
        <div>Hakunama Tata</div>
      </div>
    );
  }
}

export { Issues as IssuesNotConnected };

Issues.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loading: state.issues.loading });

export default connect(mapStateToProps)(Issues);
