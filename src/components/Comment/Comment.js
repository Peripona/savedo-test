import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import ReactMarkdown from 'react-markdown';
import { meaningFullTime } from '../../util/helpers';

class Comment extends Component {
  render() {
    const {
      user: { avatar_url, login },
      created_at,
      body,
    } = this.props.data;
    return (
      <div className="comment-wrapper">
        <div className="user-image">
          {avatar_url && <img src={avatar_url} alt="user avatar" />}
        </div>

        <div className="comment-data">
          <div className="user-name">
            <b>{login} </b>
            commented On {meaningFullTime(created_at)}
          </div>
          <div className="body">
            <ReactMarkdown source={body} />
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
