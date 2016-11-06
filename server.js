var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile('/Users/Sean/Desktop/riding_right_site/web/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
