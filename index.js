/* eslint-disable no-console */
function doSomething(arr) {
  arr.map((elt, i) => {
    console.log(elt);
    arr[i] = arr[i] * 2;
  });
  console.log(arr);
}

doSomething([12, 122, 1, 13, 0]);

function binarySearch(low, high, arr, key) {
  if (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    //let mid = (high - low + 1) / 2;
    if (arr[mid] == key) {
      console.log('found');
      return 1;
    }
    if (arr[mid] > key) {
      return binarySearch(low, mid - 1, arr, key);
    } else {
      return binarySearch(mid + 1, high, arr, key);
    }
  }
  return -1;
}

console.log(binarySearch(0, 5, [12, 22, 23, 24, 25, 66], 66));
