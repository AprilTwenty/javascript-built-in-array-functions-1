let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
    let check5 = words => words.length >= 5 ? true: false;
  return words.filter(check5);
}
/*
function check5(words){
  if (words.length >= 5) {
    return true;
}
}
*/

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
