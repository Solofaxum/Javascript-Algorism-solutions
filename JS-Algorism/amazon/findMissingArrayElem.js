let find_missing = function(input) {
    //  calculate sum of all integers
    //  in input list

    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    return sum_of_n - actual_sum;
};

/**
 * Solution Explanation Runtime Complexity
Linear, O(n).

Memory Complexity Constant, O(1).

Solution Breakdown
A naive solution is to simply search for every integer between 1 and n in the input array, stopping the search as soon as there is a missing number. Since the input array is not sorted, its time complexity will be O(n^{2}n2
​​ ).

Can you do better than O(n^{2}n​2​ )? Yes.

You could sort the array and then do a linear scan O(n) where you compare all consecutive elements to find the missing number. However, the time complexity of this algorithm is O(n log n) due to the time spent in sorting.

You can do better. Here is a linear, O(n), solution that uses the arithmetic series sum formula.

Sum (1 - n) = \frac{n (n + 1)}{2}
​2
​
​n(n+1)
​​ 

​​Here are the steps to find the missing number.

Find the sum ‘sum_of_elements’ of all the numbers in the array. This would require a linear scan, O(n).
Then find the sum ‘expected_sum’ of first ‘n’ numbers using the arithmetic series sum formula i.e. ( n * (n + 1) ) / 2.
The difference between these i.e. ‘expected_sum - sum_of_elements’, is the missing number in the array.
 */

