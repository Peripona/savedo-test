import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRequest, selectIssue } from '../../state/issues/actions';
import './Issues.css';
import Octicon, { Repo } from '@githubprimer/octicons-react';

import Issue from '../Issue/Issue';

const issuesUrl = 'https://api.github.com/repos/facebook/react/issues';

class Issues extends Component {
  static getPageTitle() {
    return (
      <div className="mt-20">
        <span>
          <Octicon icon={Repo} size="small" verticalAlign="middle" />
        </span>
        <span className=" ml-5 project-title color-primary">
          facebook<b>react</b>
        </span>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.data && this.props.data.length > 0) {
      return;
    }
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
    const { fetching, data } = this.props;
    return (
      <div>
        {fetching && 'Loading...'}
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
