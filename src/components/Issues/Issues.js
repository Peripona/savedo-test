import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../state/issues/actions';
import './Issues.css';
import Octicon, { Repo } from '@githubprimer/octicons-react';

import Issue from '../Issue/Issue';

const issuesUrl = 'https://api.github.com/repos/facebook/react/issues';

class Issues extends Component {
  componentDidMount() {
    this.props.dispatch(searchRequest({ url: issuesUrl }));
  }

  getIssuesList(data) {
    return data.map((issue, index) => <Issue key={index} issue={issue} />);
  }

  getPageTitle() {
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

  render() {
    const { fetching, data } = this.props;
    return (
      <div>
        {fetching && 'Loading...'}
        {data && data.length > 0 && (
          <div className="issues">
            {this.getPageTitle()}
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
