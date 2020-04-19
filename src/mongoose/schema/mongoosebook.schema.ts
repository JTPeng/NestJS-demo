import * as mongoose from 'mongoose'

export const MongooseBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    set(params) {
      if (!params) {
        return params
      } else {
        if (params.indexOf('http://') != 0 || params.indexOf('https://') != 0) {
          return `http://${params}`
        }
      }
    }
  },
  content: {
    type: String
  },
  price: {
    type: String
  }
})