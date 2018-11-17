import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { detailsRequest } from '../../state/details/actions';
import Comment from '../Comment/Comment';
import Octicon, { IssueOpened } from '@githubprimer/octicons-react';
import './IssueDetail.css';
import { Redirect } from 'react-router-dom';
import { Issues } from '../Issues/Issues';

class IssueDetail extends Component {
  componentDidMount() {
    const { selected, dispatch } = this.props;
    if (selected === undefined) {
      return;
    }
    dispatch(detailsRequest({ url: selected.comments_url }));
  }

  static getTitle(selected) {
    const { title, number } = selected;
    return (
      <div>
        <span>
          <h1 className="title">
            {title} <span className="color-light">#{number}</span>
          </h1>
        </span>
      </div>
    );
  }

  static getSubtitle(selected) {
    const {
      user: { login },
      created_at,
      comments,
    } = selected;
    return (
      <div className="status-container">
        <div className="status-label-open">
          <Octicon icon={IssueOpened} size="small" verticalAlign="middle" />{' '}
          &nbsp;Open
        </div>
        <div className="ml-5 color-light">
          <b>{login}</b> opened this issue on {created_at} . {comments} Comments
        </div>
      </div>
    );
  }

  render() {
    const { selected, data } = this.props;
    if (selected === undefined || !selected.number) {
      return <Redirect to={'/'} />;
    }
    return (
      <div className="issue-detail-container">
        {Issues.getPageTitle()}
        {IssueDetail.getTitle(selected)}
        {IssueDetail.getSubtitle(selected)}
        <Comment data={selected} />
        {data &&
          data.length > 0 &&
          data.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    );
  }
}

IssueDetail.propTypes = {
  selected: PropTypes.shape({
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
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

const mapsStateToProps = state => {
  const { selected } = state.issues;
  const { data } = state.details;
  return {
    selected,
    data,
  };
};

const IssueDetailConnected = connect(mapsStateToProps)(IssueDetail);

export { IssueDetail, IssueDetailConnected };
