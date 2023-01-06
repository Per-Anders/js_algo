arr = [5, 2, 44, 54, 2, 3];

function bubbleSort(arr) {
  let noSwaps;
  for (i = arr.length; i > 0; i--) {
    nowSwaps = true;
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
