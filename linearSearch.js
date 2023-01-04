function linearSearch(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
}

console.log(linearSearch([1, 12, 4, 15], 4));
