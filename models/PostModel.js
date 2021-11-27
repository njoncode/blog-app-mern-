const mongoose = require('mongoose');
const validator = require('validator');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  }, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

// find comments where the post's _id Property === comment's post property
postSchema.virtual('comments', {
  ref: 'Comment', // what model to link?
  localField: '_id', // which field on the store?
  foreignField: 'post' // which field on the comment?
});

function autopopulate(next) {
  this.populate('comments');
  next();
}

postSchema.pre('find', autopopulate);
postSchema.pre('findOne', autopopulate);
postSchema.pre('findById', autopopulate);


/**
 * @typedef User
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;