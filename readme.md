**NodeJS + Circle CI**

[![CircleCI](https://circleci.com/gh/PranjalAgni/nodejs-circleci-playground.svg?style=svg)](https://circleci.com/gh/PranjalAgni/nodejs-circleci-playground)

## This is a play project

## [I am deployed to Heroku](https://sample-node-cicd.herokuapp.com/play)

## Examples

**InsertionSort**

```js
fetch('https://sample-node-cicd.herokuapp.com/insertionSort', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
```

## Output

```js
{ answer: [ -144, 56, 78, 1111 }
```

**Binary Search**

```js
fetch('https://sample-node-cicd.herokuapp.com/binarySearch', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(ans => console.log(ans));
```

## Output

```js
{
  status: 'found';
}
```
