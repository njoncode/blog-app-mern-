import { createSelector } from 'reselect';

const selectcomment = (state) => state.comment;

export const selectComments = createSelector(
  [selectcomment],
  (comment) => comment.comments
);

export const selectIsCommentPostingLoading = createSelector(
  [selectcomment],
  (comment) => comment.isCommentPostingLoading
);

export const selectIsCommentPostingSuccess = createSelector(
  [selectcomment],
  (comment) => comment.isCommentPostingSuccess
);

export const selectCommentPostingFailureMessage = createSelector(
  [selectcomment],
  (comment) => comment.commentPostingfailureMessgae
);
