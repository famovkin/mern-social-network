const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 2,
      max: 32,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
    },
    avatar: {
      type: String,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    about: {
      type: String,
      min: 2,
      max: 50,
    },
    city: {
      type: String,
      min: 2,
      max: 50,
    },
    from: {
      type: String,
      min: 2,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('user', userSchema);
