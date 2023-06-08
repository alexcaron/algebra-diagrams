require('dotenv').config();
const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const { getUserById, addUser, getUserByUsername, getUserAndCheckPassword } = require('../database/controllers/users');

const app = express();

app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser( (user, done) => {
  done(null, user.id);
});

passport.deserializeUser( (id, done) => {
  getUserById(id)
  .then(user => {
    done(null, user);
  });
});

const authUser = require('./controllers/authUser.js');
passport.use(new LocalStrategy(authUser));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/failure'
  }));

app.post('/signup', (req, res) => {
  const newUser = req.body;
  getUserByUsername(newUser.username)
    .then(user => {
      if (user) res.send(409);
      else {
        addUser(newUser)
          .then((newUserDoc) => res.status(201).send(newUserDoc.username));
      }
    })
});

app.listen(process.env.PORT, () => {
  console.log(`listening on on port ${process.env.PORT}`);
});

