// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183942#questions

// two pointers

// naive solution
// function sumZero(arr) {
//     for(let i=0; i < arr.length; i++) {
//         for (let j=i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;
    while(left < right ){
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-1,2,3,1]))