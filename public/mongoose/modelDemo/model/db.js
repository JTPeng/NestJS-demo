// 1.引入
const mongoose = require('mongoose');

// 2.连接
mongoose.connect(
  'mongodb://eggadmin:123456@localhost:27017/eggcms',
  {
    useUnifiedTopology: true,
  },
  err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('数据库连接成功');
  },
);

module.exports = mongoose;
