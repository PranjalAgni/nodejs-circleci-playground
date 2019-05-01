function doSomething(arr) {
  arr.map((elt, i) => {
    arr[i] = arr[i] * 2;
  });
  console.log(arr);
}

doSomething([12, 122, 1, 13, 0]);
