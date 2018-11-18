import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Issue.css';
import Octicon, { IssueOpened, Comment } from '@githubprimer/octicons-react';
import { meaningFullTime } from '../../util/helpers';
class Issue extends Component {
  getLabels(labels) {
    if (!labels) return;
    return labels.map((label, index) => {
      const style = { backgroundColor: '#' + label.color };
      return (
        <span key={'label-' + index} className="label-component" style={style}>
          {label.name}
        </span>
      );
    });
  }
  render() {
    const {
      number,
      labels,
      title,
      created_at,
      user,
      comments,
    } = this.props.issue;
    return (
      <li className="issue-container">
        <div className="icon-wrapper">
          <Octicon icon={IssueOpened} size="small" verticalAlign="middle" />
        </div>

        <div className="title-wrapper">
          <div className="title">
            {title}
            {this.getLabels(labels)}
          </div>

          <div className="meta-wrapper">
            <div className="issue-number">#{number} </div>
            <div className="ml-5">Opened on {meaningFullTime(created_at)}</div>
            <div className="ml-5">By {user.login} </div>
          </div>
        </div>

        <div className="comments">
          {comments > 0 ? (
            <span>
              <Octicon icon={Comment} size="small" verticalAlign="middle" />{' '}
              {comments}
            </span>
          ) : null}
        </div>
      </li>
    );
  }
}

Issue.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string,
      }),
    ).isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
};

export default Issue;
