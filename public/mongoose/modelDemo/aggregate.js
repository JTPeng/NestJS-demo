const orderItemModel = require('./model/order_item');
const orderModel = require('./model/order');

// 聚合管道的使用
/* 
orderModel.aggregate(
  [
    {
      $lookup: {
        from: 'order_item',
        localField: 'order_id',
        foreignField: 'order_id',
        as: 'items',
      },
    },
    {
      $match: {
        all_price: { $gte: 90 },
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

// 查询order_item，找出商品名称是毛巾的商品，毛巾这个商品对应的订单的订单号以及订单的总价格
// 方法一
/* 
orderItemModel.find({ _id: '5e9abfe9438da818fc70caf1' }, (err, item) => {
  if (err) {
    console.log(err);
    return;
  }
  const orderInfo = JSON.parse(JSON.stringify(item[0]));
  const { order_id } = item[0];
  orderModel.find({ order_id }, (err, price) => {
    if (err) {
      console.log(err);
      return;
    }
    orderInfo.info = price[0];
    console.log(JSON.stringify(orderInfo));
  });
}); 
*/

// 方法二:使用聚合管道
const mongoose = require('./model/db');
// 聚合管道中的语法是原生的语法。数据库存储的是  "_id" : ObjectId("5e9abfe9438da818fc70caf1") 。所以获取_id时，也要拿到ObjectId('xxxx')形式获取
// 获取ObjectId方式 mongoose.Types.ObjectId('5e9abfe9438da818fc70caf1')
orderItemModel.aggregate(
  [
    {
      $lookup: {
        from: 'order',
        localField: 'order_id',
        foreignField: 'order_id',
        as: 'info',
      },
    },
    {
      $match: {
        _id: mongoose.Types.ObjectId('5e9abfe9438da818fc70caf1'),
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
