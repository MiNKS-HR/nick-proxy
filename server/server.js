const express = require('express')
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
console.log("express.static(path.join(__dirname, 'public'))");
app.use(express.static(path.join(__dirname, '../public')));

app.use('/experience/availableDate/', function(req,res) {
  var newurl = 'http://localhost:3002/experience/availableDate' + req.url;
  console.log("req.url", req.url)
  request(newurl).pipe(res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});