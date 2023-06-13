const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tape-diagrams', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', () => console.log('mongoose failed to connect'));
db.once('open', () => console.log('mongoose successfully connected to the database!'));

module.exports = db;