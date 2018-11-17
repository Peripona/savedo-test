import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import ReactMarkdown from 'react-markdown';

class Comment extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="comment-wrapper">
        <div className="user-image">
          <img src={data.user && data.user.avatar_url} alt="user avatar" />
        </div>

        <div className="comment-data">
          <div className="user-name">
            <b>{data.user && data.user.login} </b>
            commented On {data.created_at}
          </div>
          <div className="body">
            <ReactMarkdown source={data.body} />
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
