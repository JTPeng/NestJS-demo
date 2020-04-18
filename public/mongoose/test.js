// 1.引入
const mongoose = require('mongoose');

// 2.建立与mongoose数据的连接
// 无密码连接形式
// mongoose.connect('mongoose://127.0.0.1:27017/eggcms')

// 含密码连接形式
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');

//3. 操作表前要先定义Schema 名字最好与数据库表名一致
// Schema中定义的类型最好也和数据库的类型一致

var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: String,
});

// 4.定义数据库模型 对数据库进行操作
// model里的第一个参数
var User = mongoose.model('User', UserSchema);
/* 
// 5.查询users表的数据
User.find({}, (err, doc) => {
  if (err) {
    return;
  }
  console.log(doc);
}); 
*/
// 6.增加数据
// 6.1 实例化Model 通过实例化Model创建增加的数据
// 6.2 实例化.save()

var userModel = new User({
  name:'老大',
  age:17,
  status:'-1'
})
userModel.save((err,doc)=>{
  if (err) {
    return 
  }
  console.log(doc)
})
