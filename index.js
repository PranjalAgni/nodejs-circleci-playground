/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const { binarySearch, insertionSort } = require('./utils');
const app = express();

//Set up middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.get('/play', (req, res) => {
  res.json({
    data: 'yummy'
  });
});

app.post('/binarySearch', (req, res) => {
  console.log(req.body);
  const { data, key } = req.body;
  const status = binarySearch(0, data.length - 1, data, key);
  if (status === 1) {
    res.json({ status: 'found' });
  } else {
    res.json({ status: 'Not found' });
  }
});

app.post('/insertionSort', (req, res) => {
  const { data } = req.body;
  // console.log(typeof data);
  const result = insertionSort(data);
  res.json({ answer: result });
});

const port = process.env.PORT || 4400;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
