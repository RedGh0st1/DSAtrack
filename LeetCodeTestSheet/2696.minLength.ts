// You are given a string s consisting only of uppercase English letters.
// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
// Return the minimum possible length of the resulting string that you can obtain.
// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

function minLength(s: string): number {
  // create empty stack variable
  let stack: string[] = [];

  // iterate thru the s string
  for (let i: number = 0; i < s.length; i++) {
    let prev: string = stack[stack.length - 1];
    let curr: string = s[i];

    if ((curr === "B" && prev === "A") || (curr === "D" && prev === "C")) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.length;
}

// Example 1:
console.log(minLength("ABFCACDB"));
// Input: s = "ABFCACDB"
// Output: 2
// Explanation: We can do the following operations:
// - Remove the substring "ABFCACDB", so s = "FCACDB".
// - Remove the substring "FCACDB", so s = "FCAB".
// - Remove the substring "FCAB", so s = "FC".
// So the resulting length of the string is 2.
// It can be shown that it is the minimum length that we can obtain.

// Example 2:
console.log(minLength("ACBBD"));
// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.
