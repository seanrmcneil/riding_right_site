var express = require('express')
var pug = require('pug')
var mongoose = require('mongoose')
var app = express()

app.set('views','/Users/davidmcvicar/riding_right_site/web');
app.set('view engine', 'pug');
//app.use(express.static('web'))

app.route('/blog')
  .get(function (req, res) {
    id = req.query.id
    // get the blog post based on the id, from Mongo
    message = 'You\'re getting blog post with the id: ' + id
    res.render('index', { message: message });
  })
  .post(function (req, res) {
    res.send(); 
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
