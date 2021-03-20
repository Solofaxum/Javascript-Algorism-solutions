
/** 
 * 
*/
// Time: O(nlog(n))
// Space: O(n)
// Unless you have a better big O solution, no need to complicate it with Heap or 
//something else:
// Intuition:

// Sort the scores in descending order
// Iterate through the scores, keep track of current score and current rank,
// stop when score = 0 because we won't consider players with score = 0 regardless of their ranks or
// current rank > cut off rank / rank limit.
// If we see a score = max score, the player has the same rank.
// If we see a score < max score (the next one is always equal to or 
//smaller than the current score) then we know we need to give this player 
//len(ranks) + 1 for ranks like 1,2,2,4, 4th place player has the rank = 3 + 1


function solution(scores, cutOffRank) {
    scores.sort((a, b) => b - a);
    let maxRank = 1;
    let maxScore = scores[0];
    const ranks = [];
    for (const score of scores) {
        if (score === 0) {
            break;
        }
        if (score === maxScore) {
            ranks.push(maxRank);
        }
        if (score < maxScore) {
            maxRank = ranks.length + 1;
            if (maxRank > cutOffRank) {
                break;
            }
            ranks.push(maxRank);
            maxScore = score;
        }
    }
    return ranks.length;
}

(function() {
    const tests = [
        [[100,50,50,25],3,3],
        [[2,2,3,4,5],4,5],
        [[3,0,4,4,5],2,3],
        [[3,0,5,4,5],3,3],
    ];
    tests.forEach((test, testNo) => {
        const [scores, cutOffRank, desire] = test;
        const output = solution(scores, cutOffRank);
        console.log("Test", ++testNo, output === desire ? "PASS" : "FAIL");
        console.log("Got", output, "Expected", desire);
    });
}());