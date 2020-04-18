// 引入具体的模块
const userModel = require('./user.js');

const user = new userModel({
  name: '小二',
  age: 25,
});
user.save((err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  userModel.find({}, (err1, doc1) => {
    if (err1) {
      console.log(err1);
      return;
    }
    console.log(doc1);
  });
});
