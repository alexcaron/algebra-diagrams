const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../index.js');
const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String
});

userSchema.pre('save', function(next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;