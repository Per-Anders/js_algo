

function sumRange(num) {
    // base case
    if(num === 1) return 1;
    // recursion
    return num + sumRange(num-1);
}


console.log(sumRange(3));