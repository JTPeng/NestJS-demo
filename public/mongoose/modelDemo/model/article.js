const mongoose = require('./db');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId, // 定义为ObjectId后。增加的数据会被编译为ObjectId
    ref: 'Articlecate', // 基于populate关联查询时使用 属性值要就是model的值
  }, // 分类id
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // 基于populate关联查询时使用 属性值要就是model的值
  }, // 用户id
  author_name: {
    type: String,
  },
  description: String,
  content: String,
});

module.exports = mongoose.model('Article', articleSchema, 'article');
