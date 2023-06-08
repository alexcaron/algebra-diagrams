const { getUserAndCheckPassword } = require('../../database/controllers/users');

const authUser = (user, password, done) => {
  getUserAndCheckPassword({username: user, password: password})
    .then(([user, matched]) => {
      console.log(user);
      console.log(matched);
      if (matched) return done(null, user);
      else return done(null, false);
    })
}

module.exports = authUser;