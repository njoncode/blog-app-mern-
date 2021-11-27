import axios from 'axios';

const baseUrl = 'http://localhost:4000';

// api to fetch posts
export const fetchPostsApi = () =>
  axios
    .get(`${baseUrl}/posts/`)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to fetch an individual post
export const fetchIndividualPostApi = (id) =>
  axios
    .get(`${baseUrl}/posts/${id}`)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to add/create a post
export const addPostApi = (body) =>
  axios
    .post(`${baseUrl}/posts/`, body)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to post a comment done by the user
export const addCommentApi = (body, postId) =>
  axios
    .post(`${baseUrl}/comments/${postId}`, body)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to fetch comments
export const fetchCommentsApi = (postId) =>
  axios
    .get(`${baseUrl}/comments/${postId}`)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to edit an individual post
export const editIndividualPostApi = (id, body) =>
  axios
    .put(`${baseUrl}/posts/${id}`, body)
    .then((res) => res)
    .catch((err) => console.error(err));

// api to delete a post
export const deletePostApi = (id) =>
  axios
    .put(`${baseUrl}/posts/${id}`)
    .then((res) => res)
    .catch((err) => console.error(err));

// Authentication APi's

// api to register a user
export const signUpApi = (user) =>
  axios({
    method: 'post',
    url: `${baseUrl}/auth/register`,
    data: user,
  })
    .then((res) => res)
    .catch((err) => err.response);

// api to login/authenticate a user
export const signInApi = (user) =>
  axios({
    method: 'post',
    url: `${baseUrl}/auth/login`,
    data: user,
  })
    .then((res) => res)
    .catch((err) => err.response);

// api to log out the user
export const signOutApi = (token) =>
  axios({
    method: 'post',
    url: `${baseUrl}/auth/logout`,
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res)
    .catch((err) => err.response);
