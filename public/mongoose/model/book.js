const mongoose = require('./db.js');

const BookSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    get(params) {
      return `name:${params}`;
    },
  },
  pic: {
    type: String,
    set(params) {
      // params 就是新增的数据,这里可以出对新增的数据做一些处理
      if (!params) {
        return params;
      } else {
        if (params.indexOf('http://') != 0 || params.indexOf('https://') != 0) {
          return `http://${params}`;
        }
      }
    },
  },
  price: {
    type: Number,
    default: 99,
  },
});

module.exports = mongoose.model('Book', BookSchema, 'book');
