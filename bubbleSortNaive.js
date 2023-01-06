// https://visualgo.net/en

const arr = [4, 2, 1, 5, 55, 23];

// naive solution
function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
