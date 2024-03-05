// Given a non-empty string like "Code" return a string like "CCoCodCode".

// Examples

function stringSplosion(str) {
  let combineWord = "";
  for (let i = 0; str.length; i++) {
    combineWord += str.slice(0, i + 1);
  }
  return combineWord;
}
