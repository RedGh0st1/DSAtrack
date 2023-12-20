// Given two strings NEEDLE and HAYSTACK, return the i nded of the first occurrence of NEEDLE in HAYASTACK
// or -1 if needle is not part of HAYSTACK

// Input: HAYSTACK = "hello", NEEDLE = "ll"
// Output: 2
// Input: HAYSTACK = "aaaaa", NEEDLE = "bba"
// Output: -1
// Input: HAYSTACK = "", NEEDLE = ""
// Output: 0

// var Strstr = function (haystack, needle) {
//   const str = haystack.split("")
//   const str2 = needle.split("")
//   let result = []
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str[i] === str2[j]) {
//         result.push(i)
//       }
//     }
//   }
//   return result[0]
// }
// added this line
// if (result.length === 0) {
//     return -1
//   } else {
//     return result[0]
//   }
//this only output the index but didnt return -1 if the string is not there

var Strstr = function (haystack, needle) {
  //   const str = haystack.split("")
  //   const str2 = needle.split("")
  //   console.log("HayStack:", str) //Added to check what's going on in
  return haystack.indexOf(needle)
}
