import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { fetchPostsListStartAction } from '../redux/post/postActions';
import { selectPosts, selectIsLoading } from '../redux/post/postSelectors';

import BlogPostCard from './BlogPostCard';
import Spinner from './Spinner';
import '../styles/blogPostsList.scss';

const BlogPostsList = ({
  posts,
  fetchPostsListStartDispatch,
  isFetchingPosts,
}) => {
  console.log('BlogPostsList: posts: ', posts);
  React.useEffect(() => {
    fetchPostsListStartDispatch(); // this dispatches fetchPostsListStartAction which gets intercepted by Saga which then fires-off an API call to fetch all the posts
  }, []);

  return (
    <div className="blog-posts-list-container">
      {isFetchingPosts && <Spinner />}
      {!isFetchingPosts &&
        posts.length &&
        posts.map((post) => <BlogPostCard key={post.id} post={post} />)}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  isFetchingPosts: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsListStartDispatch: () => dispatch(fetchPostsListStartAction()),
});

BlogPostsList.propTypes = {
  posts: PropTypes.object.isRequired,
  fetchPostsListStartDispatch: PropTypes.func.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostsList);
