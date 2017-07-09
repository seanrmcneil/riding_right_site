var express = require('express')
var pug = require('pug')
var mongoose = require('mongoose')
var app = express()

var Blog = require('./models/Blog')

app.set('views','/Users/davidmcvicar/riding_right_site/web');
app.set('view engine', 'pug');

app.route('/blog')
  .get(function (req, res) {
    id = req.query.id
    Blog.find(function(err, blogs) {
       if(err)
          res.send(err)
    }
    message = 'You\'re getting blog post with the id: ' + id
    res.render('index', { message: message });
  })
  .post(function (req, res) {
    res.send(); 
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
