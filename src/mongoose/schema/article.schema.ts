import * as mongoose from 'mongoose'

export const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author_name: {
    type: String
  },
  description: {
    type: String
  },
  content: {
    type: String
  }
})