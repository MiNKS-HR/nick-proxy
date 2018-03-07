var bodyParser = require('body-parser');
const express = require('express');
var mongoose = require('mongoose');
var availableDateRouter = require('./routers/availableDate.js');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3002;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack.config.js');
const compiler = webpack(config);

const app = express();
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

mongoose.connect('mongodb://localhost/experiences');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/experience/availableDate', availableDateRouter);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});

module.exports = app;