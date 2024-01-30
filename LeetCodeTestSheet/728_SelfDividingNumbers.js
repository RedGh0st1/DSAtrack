// 728. Self Dividing Numbers
// Easy

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

var selfDividingNumbers = function (left, right) {
  let divNum = [];
  for (let i = left; i <= right; i++) {
    if (checkNum(i)) {
      divNum.push(i);
    }
  }

  return divNum;
};

// checking num is not equal to zero and num is divisors
function checkNum(nums) {
  // 128

  let digits = nums.toString().split(""); // [1,2,8]
  console.log("digits", digits);
  for (let i = 0; i < digits.length; i++) {
    //  iterate thru the array
    if (nums % Number(digits[i]) !== 0 || Number(digits[i]) === 0) {
      //
      return false;
    }
  }

  return true;
}

// Example 1:
console.log(selfDividingNumbers(1, 22));
// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:
console.log(selfDividingNumbers(47, 85));
// Input: left = 47, right = 85
// Output: [48,55,66,77]

// Constraints:

// 1 <= left <= right <= 104
