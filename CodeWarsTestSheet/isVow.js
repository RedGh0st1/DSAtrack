// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  let vowelsCode = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };

  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (vowelsCode.hasOwnProperty(a[i])) {
      newArr.push(vowelsCode[a[i]]);
    } else {
      newArr.push(a[i]);
    }
  }

  return newArr;
}

// another version 2
// const vowels={"97":"a","101":"e","105":"i","111":"o","117":"u"}
// const isVow=a=>a.map(el=>vowels[el]||el)

// another version 3
// function isVow(a){
//     return a.map(el => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(el) : el);
//   }

// version 4
// function isVow(a){
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
// }
