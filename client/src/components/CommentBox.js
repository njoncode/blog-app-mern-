import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router';

import '../styles/commentBox.scss';
import { addCommentStartAction } from '../redux/comment/commentActions';
import {
  selectIsCommentPostingLoading,
  selectIsCommentPostingSuccess,
  selectCommentPostingFailureMessage,
} from '../redux/comment/commentSelectors';

import CustomButton from './CustomButton';

const CommentBox = ({
  addCommentStartDispatch,
  isCommentPostingSuccessful,
}) => {
  const { postId } = useParams();

  const [commentToAdd, setCommentToAdd] = React.useState(null);

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    // setCommentToAdd({ [name]: value });
    setCommentToAdd(value);
  };

  // On clicking 'Add Comment'button, handleAddCommentSubmit executes & dispatches addCommentStartAction which gets intercepted by Saga which then fires-off an API call to post the comment
  const handleAddCommentSubmit = async (event) => {
    event.preventDefault();
    console.log('commentToAdd: ', commentToAdd);
    addCommentStartDispatch({ text: commentToAdd, postId });
    if (isCommentPostingSuccessful) {
      setCommentToAdd(null);
    }
  };

  return (
    <section id="app">
      <div className="comment-box-container">
        <div className="row">
          <div className="col-6">
            <div className="comment">
              <p v-for="items in item" v-text="items" />
            </div>
          </div>
        </div>
        <div className="row">
          <h2>Leave Comment here</h2>
          <div className="col-6">
            <form onSubmit={handleAddCommentSubmit}>
              <textarea
                type="text"
                className="input"
                placeholder="Write a comment"
                name="text"
                onChange={handleOnChange}
              />
              <CustomButton>Add Comment</CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  // return (
  //   <section id="app">
  //     <div className="comment-box-container">
  //       <div className="row">
  //         <div className="col-6">
  //           <div className="comment">
  //             <p v-for="items in item" v-text="items" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <h2>Leave Comment here</h2>
  //         <div className="col-6">
  //           <form onSubmit={handleAddCommentSubmit}>
  //             <textarea
  //               type="text"
  //               className="input"
  //               placeholder="Write a comment"
  //               name="text"
  //               onChange={handleOnChange}
  //             />
  //             <CustomButton>Add Comment</CustomButton>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

const mapStateToProps = createStructuredSelector({
  isIndividualPostFetching: selectIsCommentPostingLoading,
  isCommentPostingSuccessful: selectIsCommentPostingSuccess,
  commentPostingFailureMessage: selectCommentPostingFailureMessage,
});

const mapDispatchToProps = (dispatch) => ({
  addCommentStartDispatch: (data) => dispatch(addCommentStartAction(data)),
});

CommentBox.propTypes = {
  addCommentStartDispatch: PropTypes.func.isRequired,
  isCommentPostingSuccessful: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
