const catchAsync = require('../utils/catchAsync');
const { Post } = require('../models');

// Get all posts

const getAllPosts = catchAsync(async (req, res) => {
    const posts = await Post.find({}).populate('comments'); //// key to populate
    console.log('posts: ', posts);
    res.status(200).json({success: true, message: 'Posts successfully retrieved', posts});
});

// Get a specific post

const getPost = catchAsync(async (req, res) => {
    const {title, description} = req.body;
    const {postId} = req.params;
    const post = await Post.findById(postId).populate('comments');
    console.log('post: ', post);
    res.status(200).json({success: true, message: 'Specific Post successfully retrieved', post});
});

// Add a post
const addPost = catchAsync(async (req, res) => {
    const {title, description} = req.body;
    const post = await Post.create({title, description});
    res.status(200).json({success: true, message: 'Post successfully added', post});
});

// Edit a post
const editPost = catchAsync(async (req, res) => {
    const {postId} = req.params;
    console.log('postId: ', postId);
    const contentForPostToEdit = req.body;
    const postToEdit = await Post.findByIdAndUpdate(postId, contentForPostToEdit);
    // console.log('postToEdit: ', postToEdit);
    if (!postToEdit) {
        res.status(400).json({success: false, message: 'some error occurred while editing post'});
    }
    res.status(200).json({success: true, message: 'Post successfully updated', post: contentForPostToEdit});
});

// Delete a post
const deletePost = catchAsync(async (req, res) => {
    const {postId} = req.params;
    const doc = await Post.findByIdAndDelete(postId);
    console.log('doc: ', doc)
    if(!doc) {
        res.status(400).json({success: false, message: 'some error occurred while deleting post'});
    }
    res.status(200).json({success: true, message: 'Post successfully deleted', post: doc});
});

module.exports = {
    getAllPosts,
    getPost,
    addPost,
    editPost,
    deletePost
};








/**
 * Note: You set { session: false } because you do not want to store the user details in a session. You expect the user to send the token on each request to the secure routes.
 */