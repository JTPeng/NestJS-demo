const mongoose = require('./db');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId, // 定义为ObjectId后。增加的数据会被编译为ObjectId
  }, // 分类id
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
  }, // 用户id
  author_name: {
    type: String,
  },
  description: String,
  content: String,
});

module.exports = mongoose.model('Article', articleSchema, 'article');
