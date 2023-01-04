// function factorial(n) {
//     let total = 1;
//     for(let i = n; i > 0; i--){
//         total *= i
//     }
//     return total;
// }

// recursive
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));
