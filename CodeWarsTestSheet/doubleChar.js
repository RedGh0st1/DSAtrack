function doubleChar(str) {
  // Your code here
  let repeatedStr = "";
  for (let i = 0; i < str.length; i++) {
    repeatedStr += str[i] + str[i];
  }
  return repeatedStr;
}

//with repeat()
//  function doubleChar(str) {
//   let result = '';
//   for (let el in str) {
//     result += str[el].repeat(2);
//   }
//   return result;
// }
