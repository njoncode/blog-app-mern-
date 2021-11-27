const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const commentSchema = new  mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    // author: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: 'You must supply an author!'
    // },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: 'You must supply a post!'
    },
    text: {
        type: String,
        required: 'Your review must have text!'
    },
    // rating: {
    //     type: Number,
    //     min: 1,
    //     max: 5
    // }
});

// function autopopulate(next) {
//     this.populate('author');
//     next();
// }

// commentSchema.pre('find', autopopulate);
// commentSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('Comment', commentSchema);