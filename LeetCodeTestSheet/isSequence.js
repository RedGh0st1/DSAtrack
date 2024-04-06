//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



var isSubsequence = function(s, t) {
    let sPointer f= 0;
    let tPointer = 0;

    // Iterate through both strings
    while (sPointer < s.length && tPointer < t.length) {
        // If characters match, move sPointer to the next character
        if (s[sPointer] === t[tPointer]) { //  Match found! Move on in both directions 
            sPointer++;
        }
        // Move tPointer to the next character in any case
        tPointer++;
    }

    // If sPointer reached the end of s, all characters of s are found in t in order
    return sPointer === s.length;
};

// Example 1:
console.log(isSubsequence("abc", "ahbgdc") === true);
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
console.log(isSubsequence("axc", "ahbgdc") === false);
// Input: s = "axc", t = "ahbgdc"
// Output: false
