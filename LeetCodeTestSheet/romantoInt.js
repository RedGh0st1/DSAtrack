// Roman numerals are represented by seven different symbols: I,V,X,L,C,D and M
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//
// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// var romanToInt = function (s) {
//   let roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   let result = 0
//   for (let i = 0; i < s.length; i++) {
//     let current = roman[s[i]]
//     let next = roman[s[i + 1]]
//     if (current < next) {
//       result -= current
//     } else {
//       result += current
//     }
//   }
//   return result
// }

// in Python def roman_to_int(s: str) -> int:
// roman_to_int_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
// result = 0
// prev_value = 0
// for i in range(len(s) - 1, -1, -1):
//     value = roman_to_int_dict[s[i]]
//     if value < prev_value:
//         result -= value
//     else:
//         result += value
//     prev_value = value
// return result

var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0
  for (let i = 0; i < s.length; i++) {
    current = roman[s[i]]
    next = roman[s[i + 1]]
    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }

  return result
}

console.log(romanToInt("LVIII")) // Output: 58
console.log(romanToInt("III")) // Output: 3
console.log(romanToInt("MCMXCIV")) // Output: 1994
