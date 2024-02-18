// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = {};

  for (let letter of s) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (!count[letter]) return false;
    count[letter]--;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
