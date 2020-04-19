const ArticleModel = require('./model/article');

const ArticleCateModel = require('./model/articlecate');

const UserModel = require('./model/user');

// 增加数据
// const articlecate = new ArticleCateModel({
//   title: '国内新闻',
//   description: '这是国内新闻',
// });

// 增加新闻类型
// articlecate.save((err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

// 查看数据
// ArticleCateModel.find({}, (err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

// article.save((err, doc) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });

// 增加 新闻内容
// const article = new ArticleModel();

// article.title = '这是国外新闻xxx';
// article.cid = '5e9c1ad986813b3e8c9e0111';
// article.author_id = '5e9b01c8d4c4901fc830a459';
// article.author_name = '王五';
// article.description = '关于国外的新闻....';
// article.content = '关于国外xxxx的新闻....';

// article.save()

// 管道关联查询
// 查询文章信息 并显示文章的分类 以及文章的作者信息
/* 
// 2个表查询
ArticleModel.aggregate(
  [
    {
      $lookup: {
        from: 'articlecate',
        localField: 'cid',
        foreignField: '_id',
        as: 'cate',
      },
    },
  ],
  (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(doc));
  },
);
 */

// 三个表
ArticleModel.aggregate(
  [
    {
      $lookup: {
        from: 'articlecate',
        localField: 'cid',
        foreignField: '_id',
        as: 'cate',
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'author_id',
        foreignField: '_id',
        as: 'user',
      },
    },
  ],
  (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(doc));
  },
);
