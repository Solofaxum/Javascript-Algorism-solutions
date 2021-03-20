

/**
 * Platfrom: HackerRank
 * Position: Experienced
 * Amazon parses logs of user transactions/activity to flag fraudulent activity. 
 * The log file is represented as an Array of arrays. The arrays consist of the 
 * following data:
 * [<userid1> <userid2> <# of transactions>]
 * @param {*} target 
 * @param {*} transactions 
 */

//JS Solution: I believe this is O(n*m) time complexity

const solve = (target, transactions) => {
    //init trackers
    let tracker = {}
    let results = {}

    //iterate through data
    transactions.forEach( tran => {
        let tmpTrkr = {}
        let uIds = tran[0].split(' ')
        uIds.forEach( id => {
            if(tracker[id] && !tmpTrkr[id])
                tracker[id] = tracker[id] + 1, tmpTrkr = 1
            else
                tracker[id] = 1
            if(tracker[id] >= target)
                results[id] = true;
        })
    })
    let output = Object.keys(results).sort((a,b)=> b-a).slice(0, target);
    console.log(output)
} 


let targ = 3;
let data = [
    ['345366 89921 45'],
    ['029323 38239 23'],
    ['38239 345366 15'],
    ['029323 38239 77'],
    ['345366 38239 23'],
    ['029323 345366 13'],
    ['38239 38239 23']
]

solve(targ, data);
//[ '345366', '38239', '029323' ]


//--------------------------------------------------------------------------


let fradulent = (logs, threshold) => {
    let counter = {}

    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        let [id1,id2,numTrans] = log;

        if (counter[id1]) {
            counter[id1].transactions += numTrans;
            counter[id1].count += 1;
        } else {
            counter[id1] = { transactions: numTrans, count: 1 };
        }

        if (id2 !== id1) {
            if (counter[id2]) {
                counter[id2].transactions += numTrans;
                counter[id2].count += 1;
            } else {
                counter[id2] = { transactions: numTrans, count: 1 };
            }
        }
    }

    let resultArr = [];
    Object.keys(counter).forEach(key => {
        if (counter[key].count >= threshold) {
            resultArr.push({ ...counter[key], id: key });
        }
    })

    return resultArr.sort((a, b) => b.id - a.id);
}

let input = [
    [345366, 89921, 45],
    ['029323', 38239, 23],
    [38239, 345366, 15],
    ['029323', 38239, 77],
    [345366, 38239, 23],
    ['029323', 345366, 13],
    [38239, 38239, 23],
]
let input2 = 3;

console.log(
    fradulent(input, input2)
);