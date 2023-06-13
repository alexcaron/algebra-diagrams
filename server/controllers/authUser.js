const { getUserAndCheckPassword } = require('../../database/controllers/users');

const authUser = (user, password, done) => {
  getUserAndCheckPassword({username: user, password: password})
    .then(([user, matched]) => {
      if (matched) return done(null, user);
      else return done(null, false);
    })
}

module.exports = authUser;