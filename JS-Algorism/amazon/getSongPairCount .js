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

let songs = [10, 50, 90, 30];

//find how many pairs may add to a multiple of 60
let songsObject = songs.reduce((a,b) => (a[b] = true, a), {})
let pairs = 0;
let pairObj = {}

songs.forEach( song => {
    let x = Math.ceil(song / 60)
    let diff =  (60 * x) - song;
    if(songsObject[diff.toString()] && diff !== song && !checkIfPairExists(diff, song)){
        pairObj[`${diff}:${song}`] = true;
        pairs += 1;
    } 
});

function checkIfPairExists(diff, song){
    if(pairObj[`${diff}:${song}`] || pairObj[`${song}:${diff}`]){
        return true
    }
    return false
}



console.log(pairs)
//2

//----------------------------------------------------

const getSongPairCount = (songs) => {
    const arr = []
    const helper = (i, j, data) => {
        if (i > songs.length || j > songs.length) {
            return;
        }
        if (data.length == 2) {
            const sum = data.reduce((a, b) => a + b);
            if (sum % 60 == 0) {
                arr.push(data.slice());
            }
            return;
        }   
        data[i] = songs[j];
        helper(i + 1, j + 1, data);
        data.pop();
        helper(i, j + 1, data);
    }
    helper(0, 0, []);
    console.log ("ubuntu", arr);
}
getSongPairCount([10, 50, 90, 30, 9]) //????????????

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getSongPairCount' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY songs as parameter.
 */

function getSongPairCount(songs) {
const myArray = [];
const myHelperFunc = (i, j , data) => {
    if(i>songs.length || j>songs.length) {
        return;
    }
    if(data.length == 2) {
        const sum = data.reduce((x, y)=> x+y,0);
        if(sum % 60 == 0){
            myArray.push(data.slice());
        }
        return;
    }
    data[i] = songs[j];
    myHelperFunc(i+1, j+1, data);
    data.pop();
    myHelperFunc(i, j+1, data);
}
myHelperFunc(0, 0, [])
return myArray.length
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const songsCount = parseInt(readLine().trim(), 10);

    let songs = [];

    for (let i = 0; i < songsCount; i++) {
        const songsItem = parseInt(readLine().trim(), 10);
        songs.push(songsItem);
    }

    const result = getSongPairCount(songs);

    ws.write(result + '\n');

    ws.end();
}
