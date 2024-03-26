// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)
// "john McClane" --> "McClane john"

function nameShuffler(str) {
  // Split the string into an array of words
  let strArr = str.split(" ");

  // Iterate over each pair of adjacent elements
  for (let i = 0; i < strArr.length - 1; i++) {
    [strArr[i], strArr[i + 1]] = [strArr[i + 1], strArr[i]];
  }

  //return adjusted string
  return strArr.join(" ");
}
