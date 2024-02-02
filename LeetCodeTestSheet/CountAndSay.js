//38. Count and Say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":

// say: "3322251" ==> '33222251' ==> '33312215' ==> '33

// Given a positive integer n, return the nth term of the count-and-say sequence.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  //edge case if n === 1 return 1
  if (n === 1) return "1";

  //
  return counthelper(countAndSay(n - 1));
};

function counthelper(str) {
  let freq = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      freq++;
    } else {
      result += freq + 1 + str[i];
      freq = 0;
    }
  }

  return result;
}

//  console.log(counthelper("11"))

// Example 1:
// console.log(countAndSay(1))
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

// Example 2:
// console.log(countAndSay(4))
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
