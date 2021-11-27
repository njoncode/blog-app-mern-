// const mongoose = require('mongoose');
const {Comment, Post} = require('../models')

// const Review = mongoose.model('Review');

exports.addComment = async (req, res) => {
    // req.body.author = req.user._id;
    console.log('req.params.postId: ', req.params.postId)
    req.body.post = req.params.postId;
    const newComment = new Comment(req.body);
    console.log('newComment: ', newComment);
    const savedComment = await newComment.save(); //when fail its goes to catch
    console.log('savedComment: ', savedComment); //when success it print.
    if(savedComment) {
        res.status(200).json({success: true, message: 'Comment successfully posted', comment: savedComment});
    } else {
        res.status(400).json({success: false, message: 'Some Error occurred while posting comment', comment: savedComment})
    };
};

exports.getComments = async (req, res) => {
    // req.body.author = req.user._id;
    const {postId} = req.params;
    console.log('req.params.postId: ', req.params.postId)
    req.body.post = req.params.postId;
    const post = await Post.findById(postId).populate('comments');
    // const comments = await Comment.find({post: postId});

    console.log('post: ', post);
    const comments = post.comments;
    console.log('comments: ', comments);
    if (comments) {
        res.status(200).json({success: true, message: 'Comments successfully retrieved', comments});
    } else {
        res.status(400).json({success: false, message: 'Some Error occurred while retrieving comment', comment: savedComment})
    };
};




