/* eslint-disable no-console */
const fetch = require('node-fetch');

const body = {
  data: [1, 2, 4, 5, 6],
  key: 4
};

//https://sample-node-cicd.herokuapp.com
//http://localhost:4400
// fetch('https://sample-node-cicd.herokuapp.com/insertionSort', {
//   method: 'post',
//   body: JSON.stringify(body),
//   headers: { 'Content-Type': 'application/json' }
// })
//   .then(res => res.json())
//   .then(ans => console.log(ans));

fetch('https://sample-node-cicd.herokuapp.com/binarySearch', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
