const express = require('express')
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '..', 'public')));

// Reviews
app.use('/reviews', (req, res) => {
  const url = 'http://54.153.115.227:80/reviews' + req.url;
  request(url).pipe(res);
});

// Upcoming availability
app.use('/availability', (req, res) => {
  console.log(req.url, req.url);
  const url = 'http://13.56.247.246:80/availability' + req.url;
  request(url).pipe(res);
});

app.use('/experience/availableDate/', (req, res) => {
  console.log(req.url, req.url);
  const url = 'http://13.56.247.246:80/experience/availableDate/' + req.url;
  request(url).pipe(res);
});

// Similar Experiences
app.use('/similar', (req, res) => {
  const url = 'http://13.56.28.204:80/similar' + req.url;
  request(url).pipe(res);
});  

// Photo Gallery

// Details
app.use('/details', (req, res) => {
  const url = 'http://54.176.214.18:80/details' + req.url;
  request(url).pipe(res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
