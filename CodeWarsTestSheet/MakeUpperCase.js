// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  let upperCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    upperCaseStr += str[i].toUpperCase();
  }
  return upperCaseStr;
}
