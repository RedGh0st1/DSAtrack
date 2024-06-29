// You are given a string s.
// The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

function scoreOfString(s: string): number {
  let sum: number = 0;
  // hello => h' = 104, 'e' = 101, 'l' = 108, 'o' = 111
  //       => (h)|104 - 101|(e) +
  //          (e)|101 - 108|(l) +
  //          (l)|108 - 108|(l) +
  //          (l)|108 - 111|(o) = 3 + 7 + 0 + 3 = 13
  for (let i: number = 0; i < s.length - 1; i++) {
    // console.log(s[i], "-",s[i+1] ,"length - 1: ",s.length - 1)
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
}

// Example 1:
console.log(scoreOfString("hello"));
// Input: s = "hello"
// Output: 13
// Explanation:
// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:
console.log(scoreOfString("zaz"));
// Input: s = "zaz"
// Output: 50
// Explanation:
// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.
