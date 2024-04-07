//Given a 0-indexed string s, repeatedly perform the following operation any number of times:

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
// Your task is to minimize the length of s by performing the above operation any number of times.

// Return an integer denoting the length of the minimized string.

var minimizedStringLength = function (s) {
  // create a new Set to remove duplicates
  let minimizedStr = new Set(s);

  // return the length of the new Set()
  return minimizedStr.size;
};

console.log(minimizedStringLength("aabcc") === 3);
console.log(minimizedStringLength("abbcddddeeeeefg") === 7);
console.log(minimizedStringLength("cbbd") === 3);
