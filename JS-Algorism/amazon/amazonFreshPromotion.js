'use strict'

/**
 *Amazon Fresh is running a promotion in which customers receive prizes for purchasing a 
 secret combination of fruits. The combination will change each day, and the team running 
 the promotion wants to use a code list to make it easy to change the combination. The
  code list contains groups of fruits. Both the order of the groups within the code list
   and the order of the fruits within the groups matter. However, between the groups of
    fruits, any number, and type of fruit is allowable. The term "anything" is used to 
    allow for any type of fruit to appear in that location within the group.
Consider the following secret code list: [[apple, apple], [banana, anything, banana]]
Based on the above secret code list, a customer who made either of the following 
purchases would win the prize:
orange, apple, apple, banana, orange, banana
apple, apple, orange, orange, banana, apple, banana, banana
Write an algorithm to output 1 if the customer is a winner else output 0.

Input
The input to the function/method consists of two arguments:
codeList, a list of lists of strings representing the order and grouping of specific
 fruits that must be purchased in order to win the prize for the day.
shoppingCart, a list of strings representing the order in which a customer purchases 
fruit.
Output
Return an integer 1 if the customer is a winner else return 0.
Note
'anything' in the codeList represents that any fruit can be ordered in place of 'anything' in the group. 'anything' has to be something, it cannot be "nothing."
'anything' must represent one and only one fruit.
If secret code list is empty then it is assumed that the customer is a winner.

Example 1:

Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [orange, apple, apple, banana, orange, banana]
Output: 1
Explanation:
codeList contains two groups - [apple, apple] and [banana, anything, banana].
The second group contains 'anything' so any fruit can be ordered in place of 'anything' in the shoppingCart. The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of groups in the codeList is also maintained in the shoppingCart.
Example 2:

Input: codeList = [[apple, apple], [banana, anything, banana]]
shoppingCart = [banana, orange, banana, apple, apple]
Output: 0
Explanation:
The customer is not a winner as the customer has added the fruits in order of groups but group [banana, orange, banana] is not following the group [apple, apple] in the codeList.
Example 3:

Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [apple, banana, apple, banana, orange, banana]
Output: 0
Explanation:
The customer is not a winner as the customer has added the fruits in an order which is not following the order of fruit names in the first group.
Example 4:

Input: codeList = [[apple, apple], [apple, apple, banana]] shoppingCart = [apple, apple, apple, banana]
Output: 0
Explanation:
The customer is not a winner as the first 2 fruits form group 1, all three fruits would form group 2, but can't because it would contain all fruits of group 1.
 *
 * @author Solomon G.
 */

let apple = 'apple';
let banana = 'banana';
let orange = 'orange';
let anything = 'anything';

let codelists = [
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [apple, apple, banana]]
]

let carts = [
    [orange, apple, apple, banana, orange, banana],
    [banana, orange, banana, apple, apple],
    [apple, banana, apple, banana, orange, banana],
    [apple, apple, apple, banana]
]

codelists.forEach( (cl, i) => {
    let result = solve(cl, carts[i]);
    console.log(result)
});

//loop results 1, 0, 0, 0

function solve(codeList, cart){
    //flatten arrays
    let flatCl = [].concat.apply([], codeList);
    let fi = 0 //set index for flat array
    let target = flatCl.length; //fint target value
    let matches = 0; //track matches

    //loop through shoppin cart
    cart.forEach( item => {
        if(item == flatCl[fi] || flatCl[fi] === 'anything'){
            matches++;
            fi++;
        } else {
            fi = 0;
        }
    })

    return matches === target ? 1 : 0
}

console.log(solve());

//---------------------------------------------------------

const freshPromotion = (codeList, shoppingCart) => {
    // Base cases
    if (shoppingCart.length < 1) return false;
    if (shoppingCart.length < codeList.flat().length) return false; // not supported in Node 10 
    if (codeList.length < 1) return true;

    let sIdx = 0; // keep track of shopping cart index
    // for each code
    for (let i = 0; i < codeList.length; i++) {

        // start searching for a match in shoppingCart
        let foundCode = false;
        while (sIdx < shoppingCart.length && !foundCode) {
            
            // check if item in code matches the corresponding shopping cart item
            for (let j = 0; j < codeList[i].length && sIdx + j < shoppingCart.length; j++) {
                
                // keep checking as long as there are matches
                if (codeList[i][j] === 'anything' || codeList[i][j] === shoppingCart[sIdx + j]) {
                    
                    // if the last item matches, we found the code
                    if (j === codeList[i].length - 1) { 
                        foundCode = true;
                        sIdx += j;
                    }
                } else { 
                    // match failed, exit from this loop
                    break;
                }
            }
            sIdx++;
        }

        // if code wasn't there, sorry
        if (!foundCode) return false;
    }

    // since we already checked for each code and returned false if we didn't find one, we are happy to return true now
    return true;
}

let codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']]
let shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']

let codeList2 = [['apple', 'apple'], ['banana', 'anything', 'banana']]
let shoppingCart2 = ['banana', 'orange', 'banana', 'apple', 'apple']

let codeList3 = [['apple', 'apple'], ['banana', 'anything', 'banana']]
let shoppingCart3 = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']

let codeList4 = [['apple', 'apple'], ['apple', 'apple', 'banana']]
let shoppingCart4 = ['apple', 'apple', 'apple', 'banana']

console.log(
    freshPromotion(codeList, shoppingCart), // true
    freshPromotion(codeList2, shoppingCart2), // false
    freshPromotion(codeList3, shoppingCart3), // false
    freshPromotion(codeList4, shoppingCart4) // false
);



//--------------------------------------------------------------

const amazonFreshPromotion = (codeList, shoppingCart) => {
    // complexity: O(groupLength*listLength)

    const itemSplitter = '__';

    const regExp = codeList.map(
        // apple__apple.*banana__.+?__banana
        codeGroup => codeGroup.map(
            // banana__.+?__banana
            codeItem => codeItem === 'anything' ? '.+?' : codeItem
        ).join(itemSplitter)
    ).join('.*');

    return new RegExp(regExp).test(
        // orange__apple__apple__banana__orange__banana
        shoppingCart.join(itemSplitter)
    ) && 1 || 0;

};
// empty list
console.log(
    amazonFreshPromotion(
        [  ],
        ["orange", "apple", "apple", "banana", "orange", "banana"]
    )
);

console.log(
    amazonFreshPromotion(
        [
            ["apple", "apple"],
            ["banana", "anything", "banana"]
        ],
        ["orange", "apple", "apple", "banana", "orange", "banana"]
    )
);

console.log(
    amazonFreshPromotion(
        [
            ["apple", "apple"],
            ["banana", "anything", "banana"]
        ],
        ["banana", "orange", "banana", "apple", "apple"]
    )
);


//-----------------------------------------------
const winPrize = (codeList, shoppingCart) => {
    let winner = false;


    if (!codeList || codeList.length < 0) {
        winner = true;
        return winner;
    }


    if (!shoppingCart || shoppingCart.length < 0) {
        return winner;
    }

    for (let i = 0; i < codeList.length; i++) {
        let secretCombo = codeList[i];
        // console.log('secretCombo', secretCombo);

        let k = 0;
        let l = 0;
        let m = 0;

        while (l < shoppingCart.length && k < secretCombo.length) {
            if (l - m === secretCombo.length - 1) {
                winner = true;
                return winner;
            }

            if (secretCombo[k] === shoppingCart[l] || secretCombo[k] === 'anything') {
                l++;
                k++;
            } else {
                l++;
                m++;
            }
        }
    }
    return winner;
};

// tests
// const codeList1 = [["apple", "banana"]];
// const shoppingCart1 = ["banana", "apple", "anything", 'banana'];
//
//
// const codeList2 = [["apple", "apple"], ["banana", "anything", "banana"]];
// const shoppingCart2 = ["orange", "apple", "apple", "banana", "orange", "banana"];
//
// const codeList3 = [["apple", "apple"], ["banana", "anything", "banana"]];
// const shoppingCart3 = ["banana", "orange", "banana", "apple", "apple"];
//
//
// const codeList4 = [["apple", "apple"], ["banana", "anything", "banana"]];
// const shoppingCart4 = ["apple", "banana", "apple", "banana", "orange", "banana"];
//
// const codeList5= [[ "anything", "apple" ], [ "banana", "anything", "banana" ]];
// const shoppingCart5 = ["orange", "grapes", "apple", "orange", "orange", "banana", "apple", "banana", "banana"];
//
// const codeList6=  [["anything", "anything", "anything", "apple" ], [ "banana", "anything", "banana" ]];
// const shoppingCart6 = ["orange", "apple", "banana", "orange", "apple", "orange", "orange", "banana", "apple", "banana"];
//
// const codeList7=  [["anything", "anything", "anything", "apple" ]];
// const shoppingCart7 = ["orange", "apple", "banana"];
timeComplexity: O(M*N)
spaceComplexity: O(1)

///Please let me know if there are any flaws to this solutions. thanks