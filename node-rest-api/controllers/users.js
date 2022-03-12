const bcrypt = require('bcrypt');
const {
  SALT_ROUND,
} = require('../utils/constants');
const User = require('../models/user');

module.exports.updateUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          req.body.password = await bcrypt.hash(req.body.password, SALT_ROUND);
        } catch (e) {
          res.status(500).send(e);
        }
      }
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        },
      );
      res.status(200).send(updatedUser);
    } else {
      res.status(403).send({ message: 'Вы можете редактировать только свой аккаунт' });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).send(deletedUser);
    } else {
      res.status(403).send({ message: 'Вы можете удалить только свой профиль' });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {
      password,
      createdAt,
      isAdmin,
      ...other
    } = user._doc;
    res.status(200).send(other);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.followUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const followedUser = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!followedUser.followers.includes(req.body.userId)) {
        await followedUser.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).send({ message: `Вы успешно подписались на пользователя ${followedUser.username}` });
      } else {
        res.status(403).send({ message: 'Вы уже подписаны на этого пользователя' });
      }
    } else {
      res.status(403).send({ message: 'Вы не можете подписаться на себя' });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.unfollowUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const followedUser = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (followedUser.followers.includes(req.body.userId)) {
        await followedUser.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).send({ message: `Вы успешно отписались от пользователя ${followedUser.username}` });
      } else {
        res.status(403).send({ message: 'Вы не подписаны на этого пользователя' });
      }
    } else {
      res.status(403).send({ message: 'Вы не можете отписаться от себя' });
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
