// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

function countWords(words1: string[], words2: string[]): number {
  let freqObj1 = {};
  let freqObj2 = {};

  for (const word of words2) {
    freqObj1[word] = (freqObj1[word] || 0) + 1;
  }

  for (const word of words1) {
    freqObj2[word] = (freqObj2[word] || 0) + 1;
  }

  let count = 0;

  for (const word in freqObj1) {
    if (freqObj1[word] === 1 && freqObj2[word] === 1) count++;
  }

  return count;
}

// Example 1:
console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.

// Example 2:
console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]));
// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.

// Example 3:
console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));
// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".
