const mongoose = require('mongoose');

const commentSchema = new  mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: 'You must supply a post!'
    },
    text: {
        type: String,
        required: 'Your review must have text!'
    },
});

module.exports = mongoose.model('Comment', commentSchema);