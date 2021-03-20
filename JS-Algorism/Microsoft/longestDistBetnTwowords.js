

//find the aximum distance between words

function findDist(string, word1, word2) {
    // copy string and remove punctuation
    let str = string.replace(/\./gi, '');
    // split str into array of words
    const words = str.split(' ');
    // get first location of word1, word2
    const iWord1 = words.findIndex(word => word === word1);
    const iWord2 = words.findIndex(word => word === word2);
    if (iWord1 === -1 || iWord2 === -1) { return null; }
    
    return Math.abs(iWord2 - iWord1);
  }
  
  const sentence = "A quick brown fox jumps over the lazy dog.";
  const w1 = 'quick', w2 = 'lazy';
  const distance = findDist(sentence, w1, w2);
  
//   document.getElementById('answer').innerHTML =
//     `The distance between "${w1}" and "${w2}" is ${distance}.`;