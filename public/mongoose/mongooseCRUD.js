// 1.引入
const mongoose = require('mongoose');

// 2.与数据库建立连接
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');

// 3.定义Schema
const newSchema = mongoose.Schema({
  title: String,
  content: String,
  status: Number,
});

// 4.定义操作数据库的Model

const newsModel = mongoose.model('News', newSchema, 'new');

/* 
// 5.增加数据
const news = new newsModel({
  title: 'this is news title',
  content: 'this is news content',
  status: 1,
});
// 5.1 执行增加操作
news.save((err, suc) => {
  if (err) {
    return;
  }
  console.log(suc);
}); 
*/

/* 
// 6.删除
newsModel.deleteOne({ _id: '5e9b100b461f0e07ccbe56f9' }, (err, succ) => {
  if (err) {
    return;
  }
  console.log(succ);
});
 */
/* 
// 7.修改
newsModel.updateOne(
  { _id: '5e9b0ff2b387160ff8b839df', title: 'this is updateOne new title ' },
  (err, succ) => {
    if (err) {
      return;
    }
    console.log(succ);
  },
); */

// 8.查找
newsModel.find((err, succ) => {
  if (err) {
    return;
  }
  console.log(succ);
});
