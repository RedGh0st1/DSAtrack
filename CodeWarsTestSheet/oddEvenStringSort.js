// Given a string s.
// You have to return another string such that even-indexed and
//  odd-indexed characters of s are grouped and groups are space-separated

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces

function sortMyString(S) {
  let odd = ""
  let even = ""
  for (let i = 0; i < S.length; i++) {
    // we used i because we are trying to find the index which is [i] not the character which is s[i]
    // so divide i % 2 === 0 to see if its odd or even
    if (i % 2 === 0) {
      odd += S[i]
      console.log(S[i])
    } else {
      even += S[i]
    }
  }
  return odd + " " + even
}

console.log(sortMyString("CodeWars"))
// output >>> "CdWr oeas"
console.log(sortMyString("YCOLUE'VREER"))
// output >>>>  "YOU'RE CLEVER"
