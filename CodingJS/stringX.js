//Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

function stringX(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!(i > 0 && i < str.length - 1 && str[i] === "x")) newStr += str[i];
    if (str.length === 1 && str[i] === "x") newStr += str[i];
  }
  return newStr;
}
// Examples
console.log(stringX("xxHxix"));
//output→ xHix
console.log(stringX("abxxxcd"));
//output  → abcd
console.log(stringX("xabxxxcdx"));
//output → xabcdx
