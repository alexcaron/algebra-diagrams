require('dotenv').config();
const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const { getUserById } = require('../database/controllers/users');
const usersRouter = require('./controllers/users');
const app = express();

app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const authUser = require('./controllers/authUser.js');
passport.use(new LocalStrategy(authUser));
passport.serializeUser( (user, done) => {
  console.log(user);
  done(null, user.id);
});
passport.deserializeUser( (id, done) => {
  getUserById(id)
  .then(user => {
    console.log(user);
    done(null, user);
  });
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/users/', usersRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening on on port ${process.env.PORT}`);
});

