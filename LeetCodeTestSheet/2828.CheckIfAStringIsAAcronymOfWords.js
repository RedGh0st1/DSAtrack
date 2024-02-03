// 2828. Check if a String Is an Acronym of Words
// Easy
// Topics
// Companies
// Hint
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

//MY ALGO
// look at the first letter of each word
// pull those letters out of the word
// combine them and
// and if they are equal to s
// return true
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let acronym = [];
  for (let i = 0; words.length; i++) {
    acronym.push(words[i][0]);
  }

  return acronym.join("") === s;
};

// Example 1:
console.log(isAcronym(["alice", "bob", "charlie"]), "abc");
// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.

// Example 2:
console.log(isAcronym(["an", "apple"]), "a");
// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.

// Example 3:
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"]), "ngguoy");
// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.
