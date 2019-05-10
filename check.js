/* eslint-disable no-console */
const fetch = require('node-fetch');

const body = {
  data: [12, -144, 56, 78, 0, 1]
};

fetch('http://localhost:4400/insertionSort', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
