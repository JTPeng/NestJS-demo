// 引入具体的模块
const userModel = require('./user.js');

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
