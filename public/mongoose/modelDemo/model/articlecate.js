const mongoose = require('./db');

const articlecateSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  description: String,
});

module.exports = mongoose.model(
  'Articlecate',
  articlecateSchema,
  'articlecate',
);
