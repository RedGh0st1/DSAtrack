// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

function truncateSentence(s: string, k: number): string {
  const arrS: string[] = s.split(" ");

  if (arrS.length >= k) {
    return arrS.slice(0, k).join(" ");
  }

  return arrS.join("");
}

// Example 1:
console.log(truncateSentence("Hello how are you Contestant", 4));
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// Example 2:
console.log(truncateSentence("What is the solution to this problem", 4));
// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

// Example 3:
console.log(truncateSentence("chopper is not a tanuki", 5));
// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"
