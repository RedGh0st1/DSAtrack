// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word

function validateWord(s) {
  let letter = new Set(s.toLowerCase());
  return s.length % letter.size === 0;
}

// similar version  of the above solution, but using a map instead
// function validateWord(s, c = s.toLowerCase())
// {
// 	return c.length % new Set(c).size == 0
// }

// function validateWord(s) {
//     var freq = {}
//     s.toLowerCase().split('').forEach(function(s) {
//       freq[s] ? freq[s]++ : freq[s] = 1
//     })

//     return new Set(Object.values(freq)).size == 1
//   }

// function validateWord(s){
//     var counts = {};
//     for(var c of s.toLowerCase()){
//       if(counts[c] === undefined){counts[c] = 0;}
//       counts[c]++;
//     }
//     return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
//   }
