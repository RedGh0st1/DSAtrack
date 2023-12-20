// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

let strs = ["flower", "flow", "flight"]
// let strs = ["dog", "racecar", "car"]

// var longestCommonPrefix1 = function (strs) {
//   if (strs.length <= 1) return ""
//   let words = strs.sort((a, b) => a.length - b.length)
//   console.log(words)
//   let prefix = ""
//   let firstWord = words[0]
//   let secondWord = words[1]
//   for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord[i] === secondWord[i]) {
//       prefix += firstWord[i]
//     } else {
//       break
//     }
//   }
//   return prefix
// }
//   "fl", "jr", "Dr"

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "" // handles empty array case
  let prefix = ""
  for (let i = 0; i < strs[0].length; i++) {
    console.log("This the first loop strs: ", strs)
    for (let j = 1; j < strs.length; j++) {
      // get the character at the current positin strs[0][i]
      console.log("this is strs[0]:   ", strs[0])
      console.log("this is strs[0][i]:  ", strs[0][i])

      console.log("this is second loop strs[j]:   ", strs[j])

      //   console.log("this is strs[j][i]:  ", strs[j][i])
      if (strs[0][i] !== strs[j][i]) {
        console.log("this the prefix instead the if statemnet:  ", prefix)
        return prefix // Return the prefic if a mismatch is found
      }
    }
    //   Append  the character to the prefixs
    prefix += strs[0][i]
    //   console.log(" strs[0][i]:", prefix)
  }
  return prefix // Return the common prefix
}
console.log(longestCommonPrefix(strs))
// output >> "fl"
console.log(longestCommonPrefix(strs))
