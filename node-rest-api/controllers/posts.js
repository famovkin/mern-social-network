const Post = require('../models/post');
const User = require('../models/user');

module.exports.createPost = (req, res) => {
  Post.create(req.body)
    .then((newPost) => res.status(201).send({ message: 'Публикация создана', newPost }))
    .catch((e) => res.status(500).send(e));
};

// добавить проверку на пустое поля в body
module.exports.editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        },
      );
      res.status(200).send({ message: 'Публикация отредактирована', updatedPost });
    } else {
      res.status(403).send({ message: 'Вы не можете редактировать чужие публикации' });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: 'Публикация удалена', deletedPost });
    } else {
      res.status(403).send({ message: 'Вы не можете удалять чужие публикации' });
    }
  } catch (e) {
    res.send(500).send(e);
  }
};

module.exports.likeOrDislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send({ message: `Лайк поставлен посту с id ${req.params.id}` });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).send({ message: `Лайк убран у поста с id ${req.params.id}` });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const currentUserPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => Post.find({ userId: friendId })),
    );
    res.status(200).send(currentUserPosts.concat(...friendPosts));
  } catch (e) {
    res.status(500).send(e);
  }
};
