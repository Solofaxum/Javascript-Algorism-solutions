
/**
 * Sub-Array Division
 * 
 * 
 * Given a chocolate bar, two children, Lily and Ron, are determining how to 
 * share it. Each of the squares has an integer on it.Lily decides to share a 
 * contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
You must determine how many ways she can divide the chocolate.
Consider the chocolate bar as an array of squares, . She wants to find segments summing
 to Ron's birth day,  with a length equalling his birth month, . In this case, 
 there are two segments meeting her criteria:  and .

Function Description
Complete the birthday function in the editor below. It should return an integer
 denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

s: an array of integers, the numbers on each of the squares of chocolate
d: an integer, Ron's birth day
m: an integer, Ron's birth month
 * 
 */


// Complete the birthday function below.
function birthday(s, d, m) {
    var ways = 0,
        i = 0,
        sum = 0,
        j = 0,
        index = 0;
    if (s.length === 1 && s[0] === d) {
        return 1;
    }
    for (i = 0; i < s.length - (m - 1); i++) {
        sum = 0;
        index = i;
        for (j = 0; j < m; j++) {
            sum += s[index++]
        }
        if (sum === d) {
            ways++;
        }
    }
    return ways;

}
let input = [2, 3, 2, 5, 6, 4]
console.log(birthday(input))    