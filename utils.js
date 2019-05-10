const binarySearch = (low, high, arr, key) => {
  if (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    //let mid = (high - low + 1) / 2;
    if (arr[mid] == key) {
      return 1;
    }
    if (arr[mid] > key) {
      return binarySearch(low, mid - 1, arr, key);
    } else {
      return binarySearch(mid + 1, high, arr, key);
    }
  }
  return -1;
};

const insertionSort = arr => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

module.exports = { binarySearch, insertionSort };
