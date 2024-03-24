// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

function stringy(size) {
  // create empty string to store numbers
  let onesAndZer0s = "";

  // iterate thru the string size
  for (let i = 1; i <= size; i++) {
    //  if index is odd, add 1, else add 0
    // odd = 1, even= 0` [0]=1, [1]='0', [2]='1'...
    if (i % 2 === 0) onesAndZer0s += "0";
    else onesAndZer0s += "1";
  }

  console.log(onesAndZer0s);
  // return  the final string
  return onesAndZer0s;
}
