


const yourArray = [1, 1, 2, 3, 4, 5, 5]

const yourArrayWithoutDuplicates = [...new Set(yourArray)]

let duplicates = [...yourArray]
yourArrayWithoutDuplicates.forEach((item) => {
    const i = duplicates.indexOf(item)
    duplicates = duplicates
        .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length))
})

console.log(duplicates) //[ 1, 5 ]


// Solution -2------------------------------------
const arr = [5, 3, 4, 2, 3, 7, 5, 6];

const findDuplicates = arr
    => arr.filter((item, index)
        => arr.indexOf(item) !== index)
const duplicates = findDuplicates(arr);
console.log(duplicates);