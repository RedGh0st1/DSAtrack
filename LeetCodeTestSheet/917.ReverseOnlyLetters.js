// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// helper function for  checking if is a letter
function isEnglishLetter(char) {
  return /[a-zA-Z]/.test(char);
}

var reverseOnlyLetters = function (s) {
  //create pointers left and right
  let newSArr = s.split("");
  let left = 0;
  let right = newSArr.length - 1;

  while (left < right) {
    //if one of them is non english letter just move the pointer forward
    if (isEnglishLetter(newSArr[left]) && isEnglishLetter(newSArr[right])) {
      [newSArr[left], newSArr[right]] = [newSArr[right], newSArr[left]];
      left++;
      right--;
    } else if (!isEnglishLetter(newSArr[left])) left++;
    else if (!isEnglishLetter(newSArr[right])) right--;
  }

  return newSArr.join("");
};

//   Example 1:
//   console.log(reverseOnlyLetters("ab-cd") === "dc-ba")
//   Input: s = "ab-cd"

//   Example 2:
//   console.log(reverseOnlyLetters("a-bC-dEf-ghIj") === "j-Ih-gfE-dCba")
//   Input: s = "a-bC-dEf-ghIj"

//   Example 3:
//   console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!") === "Qedo1ct-eeLg=ntse-T!")
//   Input: s = "Test1ng-Leet=code-Q!"
