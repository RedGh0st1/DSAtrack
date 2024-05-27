// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((el: string) => el.split("").reverse().join(""))
    .join(" ");
}

// Example 1:
console.log(reverseWords("Let's take LeetCode contest"));
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
console.log(reverseWords("Mr Ding"));
// Input: s = "Mr Ding"
// Output: "rM gniD"
