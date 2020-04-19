// user表的Schema和Mode

// 1.引入数据库连接对象
const mongoose = require('./db.js');

// 2.定义schema
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true, // mongoose中的预定义修饰符 插入数据时对数据前后去空格
  },
  age: Number,
  sn: {
    type: String,
    index: true, // 给sn添加索引，可提高查询速度,但会对增加数据时的性能产生影响
  },
  status: {
    type: Number,
    default: 1,
  },
});

// 静态方法扩展(常用)
usersSchema.statics.findSn = function(sn, callback) {
  // this 指向暴露出去的函数的实例化
  this.find({ sn: sn }, (err, doc) => {
    callback(err, doc);
  });
};

// 实例方法扩展(不常用)
// 实例方法
usersSchema.methods.print = function() {
  console.log('这是一个实例方法');
  console.log(this);
};
// 3.定义model并且向外暴露
module.exports = mongoose.model('Users', usersSchema, 'users');
