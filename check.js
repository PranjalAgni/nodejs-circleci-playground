/* eslint-disable no-console */
const fetch = require('node-fetch');

const body = {
  data: [1111, -144, 56, 78]
};

fetch('http://localhost:4400/insertionSort', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
