

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    
        if(palindrome.length <= 1) return '';
        for(let i = 0; i < palindrome.length; i++) {
            if(palindrome[i] === 'a' ) continue; // 'a' is already the lowest, so dont change
            if(palindrome.length % 2 !== 0 
               && i === Math.floor(palindrome.length / 2)) continue; // when the length is odd, the middle character changes will not effect the palidrome
            return palindrome.substring(0 , i) + 'a' + palindrome.substring(i + 1);
        }
        return palindrome.substring(0 , palindrome.length - 1) + 'b';

};

//-----------------------------------------------------------------------

// Iterate through the first half of characters the palindrome string 
//s and modify the palindrome string s to create candidates t in a greedy manner.
// Sort all candidates and return the lexicographically smallest 
//candidate as the answer.

// There are 2 use cases under consideration:

// Case 1: If the current character under consideration is already 'a', 
//then the best change for this character pair is
// to the corresponding second half of t, who's value is also a. 
//The corresponding second half's value 'a' is changed to 'b'
// for this candidate.

// Case 2: Otherwise if the current character under consideration is not 'a', then change it to 'a'.

// Note: The greedy approach is based on the lexicographically smallest character in the alphabet 'a' and the second smallest character in the alpabet 'b'.
// Note: since s is a palindrome, we know s[i] == s[N - 1 - i] (ie. the first half's characters match the corresponding second half's characters per the definition of a palindrome).
// Note: half depends on the length of s. If s has odd length, then we cannot consider modification to the middle character as a possible candidate, because changing the middle character of an odd length palindrome would result in another 
//palindrome, which is not eligible as an answer per the problem statement.
// Note: an optimization can be performed to return immediately when any of the
// first-half characters of s is replaced with an 'a'. Otherwise 
// if all characters in s are 'a', then replace the last 'a' with a 'b'.
// Javascript Solutions:
// Javascript: inefficiently store and sort all candidates

let breakPalindrome = (s, cand = []) => {
    let N = s.length;
    if (N == 1)
        return '';
    let half = (N % 2 == 0) ? (N / 2) : Math.ceil(N / 2.0) - 1;
    for (let i = 0; i < half; ++i) {
        let t = s.split('');
        if (t[i] == 'a')
            t[N - 1 - i] = 'b';
        else
            t[i] = 'a';
        cand.push(t.join(''));
    }
    cand.sort();
    return cand[0];
};
//------------------ Javascript: optimized

let breakPalindrome = s => {
    let N = s.length;
    if (N == 1)
        return '';
    let half = (N % 2 == 0) ? Math.ceil(N / 2) : Math.ceil(N / 2) - 1;
    for (let i = 0; i < half; ++i) {
        let t = s.split('');
        if (s[i] != 'a') {
            t[i] = 'a';
            return t.join('');
        }
    }
    let t = s.split('');
    t[N - 1] = 'b';
    return t.join('');
};



/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) {
        return '';
    }
    
    let i = 0;
    let j = palindrome.length - 1;
    while (i < j) {
        if (palindrome[i] !== 'a') {
            return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1);
        }
        i += 1;
        j -= 1;
    }
    return palindrome.substring(0, palindrome.length - 1) + 'b';
};


//---------------------------------------------------------------------------
const breakPalindrome = (palindrome) => {
    if (palindrome.length == 1) return '';
    for (const p of palindrome) {
        for (let i = 97; i <= 122; i++) {
            let c = String.fromCharCode(i);
            if (c != p && i < p.charCodeAt()) {
                let tmp = palindrome.replace(p, c);
                if (!isPalindrome(tmp)) {
                    return tmp;
                }
            }
        }
    }
	// if cannot find lexicographically smaller one, find the next larger one
    return palindrome.slice(0, palindrome.length - 1) + String.fromCharCode(palindrome[palindrome.length - 1].charCodeAt() + 1);
};

const isPalindrome = (str) => {
    return str == str.split("").reverse().join("");
}