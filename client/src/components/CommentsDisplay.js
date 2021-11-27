import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TimeAgo from 'react-timeago';
import { useParams } from 'react-router';

import { selectIndividualPost } from '../redux/post/postSelectors';
import { fetchCommentsStartAction } from '../redux/comment/commentActions';
import { selectComments } from '../redux/comment/commentSelectors';

import '../styles/commentsDisplay.scss';

// CommentsDisplay Component dispalays the comments posted by the users
const CommentsDisplay = ({ fetchCommentsStartDispatch, comments }) => {
  const { postId } = useParams();

  React.useEffect(() => {
    fetchCommentsStartDispatch(postId);
  }, [comments.length]);

  return (
    <>
      {comments.length && (
        <div className="comments-container">
          <h1 className="comments-title">Comments</h1>
          {comments.map(({ text, created }) => (
            <ul id="comments-list" className="comments-list">
              <li>
                <div className="comment-main-level">
                  {/* <div className="comment-avatar">
                    <img
                      src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                      alt=""
                    />
                  </div> */}
                  <div className="comment-box">
                    <div className="comment-head">
                      <h6 className="comment-name by-author">
                        <a href="http://creaticode.com/blog">Agustin Ortiz</a>
                      </h6>
                      <span>
                        <TimeAgo date={created} />
                      </span>
                      <i className="fa fa-reply" />
                      <i className="fa fa-heart" />
                    </div>
                    <div className="comment-content">{text}</div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  individualPost: selectIndividualPost,
  comments: selectComments,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartDispatch: (data) =>
    dispatch(fetchCommentsStartAction(data)),
});

CommentsDisplay.propTypes = {
  fetchCommentsStartDispatch: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsDisplay);
