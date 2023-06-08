const User = require('../models/user.js');

const findUserByUsername = (username) => {
  return User.findOne({ username: username});
};

const addUser = (user) => {
  return User.add({
    username: user.username,

  })
}

module.exports.findUserByUsername = findUserByUsername;