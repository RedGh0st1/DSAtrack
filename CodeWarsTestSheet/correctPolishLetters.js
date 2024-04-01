// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski

function correctPolishLetters(string) {
  const diacritics = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (diacritics.hasOwnProperty(string[i])) {
      newString += diacritics[string[i]];
    } else {
      newString += string[i];
    }
  }

  return newString;
}

// another version
// function correctPolishLetters (string) {
//   const diacritics= {
//     ą: "a",
//     ć: "c",
//     ę: "e",
//     ł: "l",
//     ń: "n",
//     ó: "o",
//     ś: "s",
//     ź: "z",
//     ż: "z",
//   };
//   let newString = ""
//   for(let letter of string){
//     if(diacritics.hasOwnProperty(letter)){
//       newString+=diacritics[letter]
//     }else{
//       newString+=letter
//     }
//   }
//   return newString
// }

//another version
// function correctPolishLetters (string) {
//     var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
//     return string.replace(/[ąćęłńóśźż]/g, match => dict[match]); }

// another version
// function correctPolishLetters(s) {
//   return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
// }

console.log(
  correctPolishLetters("Jędrzej Błądziński") === "Jedrzej Bladzinski"
);
console.log(correctPolishLetters("Lech Wałęsa") === "Lech Walesa");
console.log(
  correctPolishLetters("Maria Skłodowska-Curie") === "Maria Sklodowska-Curie"
);
