/* eslint-disable no-console */
const fetch = require('node-fetch');

const body = {
  data: [1111, -144, 56, 78]
};

fetch('https://sample-node-cicd.herokuapp.com/insertionSort', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
