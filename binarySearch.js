// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183956#questions
// divide and conquer

sortedArray = [1, 4, 5, 6, 7, 12, 22, 44, 55, 66];

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(sortedArray, 12));
