// user表的Schema和Mode

// 1.引入数据库连接对象
const mongoose = require('./db.js');

// 2.定义schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true, // mongoose中的预定义修饰符 插入数据时对数据前后去空格
  },
  age: Number,
  status: {
    type: Number,
    default: 1,
  },
});

// 3.定义model并且向外暴露
module.exports = mongoose.model('User', userSchema, 'user');
