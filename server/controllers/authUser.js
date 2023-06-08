const { getUserAndCheckPassword } = require('../../database/controllers/users');

const authUser = (user, password, done) => {
  getUserAndCheckPassword({username: user, password: password})
    .then(result => {
      if (result) return done(null, result);
      else return done(null, false);
    })
}

module.exports = authUser;