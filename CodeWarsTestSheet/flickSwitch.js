// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr) {
  // every word is true until we see flick which will switch the follows words to false
  let switchArr = [];
  let flip = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      flip = !flip;
    }
    switchArr.push(flip);
  }

  return switchArr;
}
