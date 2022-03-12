const bcrypt = require('bcrypt');
const User = require('../models/user');
const {
  SALT_ROUND,
} = require('../utils/constants');

module.exports.createUser = (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, SALT_ROUND)
    .then((hash) => {
      User.create({ ...req.body, password: hash })
        .then((user) => res.status(200).send(user))
        .catch((e) => res.send(e));
    })
    .catch((e) => res.status(500).send(e));
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((findedUser) => {
      if (!findedUser) {
        res.status(401).send({ message: 'Неверные почта или пароль' });
      }
      bcrypt.compare(password, findedUser.password)
        .then((matched) => {
          if (!matched) {
            res.status(401).send({ message: 'Неверные почта или пароль' });
          }
          res.status(200).send(findedUser);
        });
    })
    .catch((e) => res.status(500).send(e));
};
