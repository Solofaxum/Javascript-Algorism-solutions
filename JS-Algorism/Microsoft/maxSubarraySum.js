

// var maxSequence = function (arr) {

//     var curr_max = 0, max_so_far = 0;

//     for (var i = 0; i < arr.length; i++) {
//         curr_max = Math.max(0, curr_max + arr[i]);
//         max_so_far = Math.max(curr_max, max_so_far);
//     }
//     return max_so_far;
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 : [4, -1, 2, 1]

// /* If the solution specifically requires, that if the list is made up of only negative numbers or an empty list is given, zero should be returned - then few more lines can be added to explicitly take care of that. */

// let allPositives = arr => arr.every(n => n > 0)
// let allNegatives = arr => arr.every(n => n < 0)
// let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

// var maxSequence = function (arr) {
//     if (arr.length === 0 || allNegatives(arr)) return 0;
//     if (allPositives(arr)) return sum(arr);

//     var curr_max = 0, max_so_far = 0;

//     for (var i = 0; i < arr.length; i++) {
//         curr_max = Math.max(0, curr_max + arr[i]);
//         max_so_far = Math.max(curr_max, max_so_far);
//     }
//     return max_so_far;
// }

// console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // returns 0
// console.log(maxSequence([])); // returns 0
// console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); // returns 23

//Kadane’s Algo with O(n) linear complexity

const maxSequence = arr => {
    const allPositives = arr => arr.every(n => n > 0)
    const allNegatives = arr => arr.every(n => n < 0)

    if (arr.length === 0 || allNegatives(arr)) return 0;

    let temp = { start: 0, sum: 0 };
    let result = { start: 0, end: 0, sum: 0 }

    for (let i = 0; i < arr.length; i++) {
        temp.sum += arr[i];

        if (temp.sum > result.sum) {
            result = { start: temp.start, end: i, sum: temp.sum }
        }

        if(temp.sum < 0){
            temp.sum = 0;
            temp.start = i + 1;
        }
    }
return result;
}
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))  //0
console.log(maxSequence([]))  //0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4]))  //{start:0, end:8, sum:23}