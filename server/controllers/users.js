const express = require('express');
const router = express.Router();

const { addUser, getUserByUsername, getUserAndCheckPassword } = require('../../database/controllers/users');

router.post('/login', (req, res) => {
  const user = req.body;
  getUserAndCheckPassword(user)
    .then(user => {
      if (user) res.send(409);
      else {
        addUser(newUser)
          .then((newUserDoc) => res.send({
            body: newUserDoc,
            statusCode: 201
        }));
      }
    })
});

router.post('/signup', (req, res) => {
  const newUser = req.body;
  console.log('request received for newUser: ', newUser);
  getUserByUsername(newUser.username)
    .then(user => {
      console.log('user already found: ', user);
      if (user) res.send(409);
      else {
        addUser(newUser)
          .then((newUserDoc) => res.send({
            body: newUserDoc,
            statusCode: 201
        }));
      }
    })
});

module.exports = router;