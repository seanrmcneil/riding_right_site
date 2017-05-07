mongoose = require('mongoose')

module.exports = mongoose.model('Blog', {
   blog_id: Number
   title: String
   text: String
});
