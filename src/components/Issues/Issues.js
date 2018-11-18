import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRequest, selectIssue } from '../../state/issues/actions';
import './Issues.css';
import Octicon, { Repo } from '@githubprimer/octicons-react';

import Issue from '../Issue/Issue';

const issuesUrl = 'https://api.github.com/repos/facebook/react/issues';

class Issues extends Component {
  //https://github.com/ReactTraining/history/pull/570 :: multiple clicks on Link causes browser history to explode
  static getPageTitle() {
    return (
      <Link className="home" to={'/'}>
        <span>
          <Octicon icon={Repo} size="small" verticalAlign="middle" />
        </span>
        <span className=" ml-5 project-title color-primary">
          facebook<b>react</b>
        </span>
      </Link>
    );
  }

  componentDidMount() {
    this.props.dispatch(searchRequest({ url: issuesUrl }));
  }

  getIssuesList(data) {
    return data.map(issue => (
      <Link
        className="link"
        key={issue.id}
        to={`/details/${issue.number}`}
        onClick={this.issueSelected.bind(this, issue.number)}
      >
        <Issue issue={issue} />
      </Link>
    ));
  }

  issueSelected(issueId) {
    this.props.dispatch(selectIssue(issueId));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data && data.length > 0 && (
          <div className="issues">
            {Issues.getPageTitle()}
            <ul className="issues-list">{this.getIssuesList(data)}</ul>
          </div>
        )}
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
