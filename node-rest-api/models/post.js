const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      min: 2,
      max: 500,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
);

module.exports = mongoose.model('post', postSchema);
