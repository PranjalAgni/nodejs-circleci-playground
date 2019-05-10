/* eslint-disable no-console */
const fetch = require('node-fetch');

const body = {
  data: [12, -144, 56, 78, 0, 1]
};

fetch('https://sample-node-cicd.herokuapp.com/insertionSort', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
