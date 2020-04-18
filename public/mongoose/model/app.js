// 引入具体的模块
const userModel = require('./user.js');

/* 
// mongoose预定义修饰符
const user = new userModel({
  name: '     小三    ',
  age: 18,
});
user.save((err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  userModel.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(doc);
  });
}); 
*/

const bookModel = require('./book.js');
// mongoose自定义修饰符
// set修饰符验证
const book = new bookModel({
  name: '  犀牛书   ',
  pic: 'www.RhinoBook.com',
});

book.save((err, succ) => {
  if (err) {
    console.log(err);
    return;
  }
  bookModel.find({}, (err, succ) => {
    if (err) {
      return;
    }
    console.log(succ);
  });
});

// get修饰符验证
console.log(book.name);
