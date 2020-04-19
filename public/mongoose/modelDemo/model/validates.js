const mongoose = require('./db');

// 定义schema
const validateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // 必填 可用于任意类型
  },
  age: {
    type: Number,
    max: 120, // 最大值120 仅Number类型
    min: 18, // 最小值110 仅Number类型
  },
  sex: {
    type: String,
    enum: ['男', '女'], // 值必须是枚举中的其中一个值 仅用于String类型
  },
  content: {
    type: String,
    trim: true,
    maxlength: 10, // 最大长度10 仅String类型
    minlength: 5, // 最小长度5 仅String类型
  },
  status: {
    type: Number,
    default: 1, // 默认值
  },
  pic: {
    type: String,
    set(params) {
      // set方法
      if (!params) {
        return params;
      } else {
        if (params.indexOf('http://') != 0 || params.index0f('https://')) {
          return `http://${params}`;
        }
      }
    },
  },
  phone: {
    type: String,
    validate(num) {
      return num.length >= 11;
    },
  },
});

module.exports = mongoose.model('Validate', validateSchema, 'validate');
