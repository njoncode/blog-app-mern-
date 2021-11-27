import { createSelector } from 'reselect';

const selectpost = (state) => state.post;

export const selectPosts = createSelector([selectpost], (post) => post.posts);

export const selectIsLoading = createSelector(
  [selectpost],
  (post) => post.isLoading
);

export const selectIsSuccess = createSelector(
  [selectpost],
  (post) => post.isSuccess
);

export const selectFailureMessage = createSelector(
  [selectpost],
  (post) => post.failureMessage
);

export const selectIndividualPost = createSelector(
  [selectpost],
  (post) => post.individualPost
);
