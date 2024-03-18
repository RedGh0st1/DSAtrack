// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr) {
  // every word is true until we see flick
  //  after seeing flick, all following words are false

  // create  an empty array to hold our results
  let switchArr = [];
  // create  a variable to keep track of whether or not we 've seen "flick" yet
  let flip = true; // starts as true because it's before any instances of "flick"

  //  loop through each word in arr
  for (let i = 0; i < arr.length; i++) {
    //  check to see if this word is "flick
    if (arr[i] === "flick") {
      //  set flip to be the opposite of what it was before
      flip = !flip;
    }
    //  add the result of checking flip to  the end of switchArr
    switchArr.push(flip);
  }
  //   return the new array with the modified values
  return switchArr;
}
