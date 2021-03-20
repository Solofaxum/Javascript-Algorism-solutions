

//From a given array, give the highest sum between two integers

// solution-1 -----Brute Force
// A naive approach is to use two loops to iterate through arr and multiply every integer by every other integer and then check for the maximum.

// O(n^2) time
const twoSum = (arr) => {
  let maxProduct = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) { // i+1 here!
      let product = arr[j] + arr[i];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}


// solution-2 -----Sorting   O(n log n) time
// A better approach is to sort the array 


const twoSum = (arr) => {
  let sortedArr = arr.sort();
  return sortedArr[arr.length - 1] + sortedArr[arr.length - 2];
}


//solution-3 -----  Greedy
// The best solution is to use a greedy approach 

// O(n) time
const twoSum = (arr) => {
    let index = [];
    let highestInt = 0;
    let nextHighestInt = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] > highestInt) {
        nextHighestInt = highestInt;
        highestInt = arr[i];
        
      } else if (arr[i] > nextHighestInt) {
        nextHighestInt = arr[i];
      } else {
        continue;
      }
    }
    return highestInt + nextHighestInt;
  }