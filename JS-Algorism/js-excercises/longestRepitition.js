
'use strict'

/**
 * Write a function called longestRepetition (string) that takes a string and
 * returns the longest repetition of the same character inside the string.
 * Example
 * 1. longestRepitition ("aaaabbccc") // returns "aaaa"
 * 2. longestRepitition ("11112223333334") // returns "333333"
 * 3. longestRepitition( "xyyyzzzzzz") // returns zzzzzz
 *
 * @author Solomon G.
 */
function longestRepetition(string) {
    let str = string[0];
    let subStrings = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            str = str + string[i + 1]
        } else {
            subStrings.push(str);
            str = string[i + 1];
        }
    }

    let longest = subStrings[0];
    for (let i = 1; i < subStrings.length; i++) {
        if (longest.length < subStrings[i].length) {
            longest = subStrings[i];

        }
    }
    console.log(longest[0]);
}
longestRepetition('aaaaabbbbbbcccc');



