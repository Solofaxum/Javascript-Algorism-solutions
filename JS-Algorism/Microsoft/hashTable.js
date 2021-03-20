// Microsoft questions

// Find the combination (pair) of elements that returns the target element;


// Solution-1-Brute Force — O(n²)
const twoSum = (arr, target) => {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}
console.log("solution-1",twoSum([2, 6, 11, 15], 9));

//Solution-2-Much Improved Solution with Hash/Object in O(n) time
const twoSum_On_Better = (arr, target) => {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;                              
		console.log("this was numobject", numObject);
	}
	for (var i = 0; i < arr.length; i++) {
		let diff = target + arr[i];
		if (numObject.hasOwnProperty(diff) ) {
			return [arr[i], arr[numObject[diff]]];
		}
	}
}
console.log("solution-2", twoSum_On_Better([5, 20, 3, 2, 50, 80], 78));
// Output [ 0, 1 ]