const validateModel = require('./model/validates');

const validator = new validateModel({
  name: '小红',
  age: 18,
  sex: '女',
  content: '这是校验练习',
  pic: 'www.JavaScript.com',
  phone:'11111111111'
});

validator.save();
// validateModel.deleteOne({ _id: '5e9bc50b18671d20200f4ed8' }, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });
