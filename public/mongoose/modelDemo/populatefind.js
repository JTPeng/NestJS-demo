// mongoose中populate关联查询
// 需引入所有相关联的model
const ArticleModel = require('./model/article');
const ArticleCateModel = require('./model/articlecate');
const UserModel = require('./model/user');

ArticleModel.find({})
  .populate('cid') // 传入关联的字段
  .populate('author_id') // 传入关联的字段
  .exec((err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(doc);
  });
