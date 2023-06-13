const User = require('../models/user.js');

const getUserById = (id) => {
  return User.findById(id);
}

const getUserByUsername = (username) => {
  return User.findOne({username: username});
};

const getUserAndCheckPassword = async (user) => {
  const userDoc = await User.findOne({username: user.username});
  return [userDoc, await userDoc.comparePassword(user.password)];   // returns null if pw doesn't match
}

const addUser = (user) => {
  return User.create({
    username: user.username,
    password: user.password
  })
}

module.exports.getUserByUsername = getUserByUsername;
module.exports.getUserById = getUserById;
module.exports.getUserAndCheckPassword = getUserAndCheckPassword;
module.exports.addUser = addUser;