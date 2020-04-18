// user表的Schema和Mode

// 1.引入数据库连接对象
const mongoose = require('./db.js');

// 2.定义schema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: Number,
    default: 1,
  },
});

// 3.定义model并且向外暴露
module.exports = mongoose.model('User', userSchema, 'user');
