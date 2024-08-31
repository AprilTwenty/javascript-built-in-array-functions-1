let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
//  let count = (words) => words.length;
  return words.map(count);
}

function count(words){
  return words.length;
}

const result = getWordLengths(words);
console.log(result); // Output: [5, 5]
