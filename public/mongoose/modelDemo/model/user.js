const mongoose = require('./db');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  status: {
    type: String,
    default: 1,
  },
});

module.exports = mongoose.model('User', userSchema, 'user');
