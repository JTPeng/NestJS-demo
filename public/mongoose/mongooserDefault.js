// 1.引入
const mongoose = require('mongoose');

// 2.建立连接
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

// 3.创建schema
const bookScheam = mongoose.Schema({
  name: String,
  content: String,
  status: {
    type: Number,
    default: 0, // 默认值设置
  },
});

// 4.创建model

const bookModel = mongoose.model('Book', bookScheam, 'book');

// 5.插入数据
/* 
// 无默认值
const book = new bookModel({
  name: '你不知道的JavaScript',
  content: '图灵教育',
  status: 1,
});
book.save((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
}); 
*/
/* 
// 有默认值
const book = new bookModel({
  name: 'JavaScript权威指南',
  content: '犀牛书',
});
book.save((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
 */
bookModel.find({}, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
