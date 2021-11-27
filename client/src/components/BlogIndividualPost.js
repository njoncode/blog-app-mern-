import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchIndividualPostStartAction } from '../redux/post/postActions';
import {
  selectIsLoading,
  selectIndividualPost,
} from '../redux/post/postSelectors';
import Spinner from './Spinner';
import CommentBox from './CommentBox';
import CommentsDisplay from './CommentsDisplay';

import '../styles/blogIndividualPost.scss';
import '../styles/commentsDisplay.scss';

// BlogIndividualPost component renders a specific post
const BlogIndividualPost = ({
  isIndividualPostFetching,
  fetchIndividualPostStartDispatch,
  individualPost,
}) => {
  const { postId } = useParams();

  React.useEffect(() => {
    fetchIndividualPostStartDispatch(postId); // this will dispatch fetchIndividualPostStartAction which will fetch the individual post
  }, []);

  const { title, description } = individualPost || {};

  return (
    <div className="blog-individual-container">
      {isIndividualPostFetching && <Spinner />}
      {!isIndividualPostFetching && individualPost && (
        <>
          <div className="banner" />
          <div className="post-content-container blogpost-content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="comments-wrapper">
            <CommentsDisplay />
            <CommentBox />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isIndividualPostFetching: selectIsLoading,
  individualPost: selectIndividualPost,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIndividualPostStartDispatch: (data) =>
    dispatch(fetchIndividualPostStartAction(data)),
});

BlogIndividualPost.propTypes = {
  isIndividualPostFetching: PropTypes.bool.isRequired,
  fetchIndividualPostStartDispatch: PropTypes.func.isRequired,
  individualPost: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndividualPost);
