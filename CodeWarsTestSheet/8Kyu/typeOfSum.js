// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  // a = number , b = string  --> return "string"
  // a = string, b = empty string returns a "string"
  // a = string, b = boolean return  "string"
  // a = string, b = null --> return "string"
  // a = undefined, b = string --> return "string"
  // a = boolean, b = number --> return "number"
  // a = null, b =  number --> return "number"
  // a = null, b = undefined --> return "number"
  //a = undefined, b = boolean  --> return "number"
  // a = null, b = boolean  --> return "number"

  return typeof a === "string" || typeof b === "string" ? "string" : "number";
}

console.log(typeOfSum(1, "a") === "string");
console.log(typeOfSum("dd", "") === "string");
console.log(typeOfSum(true, 1) === "number");
console.log(typeOfSum("s", false) === "string");
console.log(typeOfSum(null, 1) === "number");
console.log(typeOfSum("s", null) === "string");
console.log(typeOfSum(null, undefined) === "number");
console.log(typeOfSum(undefined, "re") === "string");
console.log(typeOfSum(undefined, true) === "number");
console.log(typeOfSum(null, false) === "number");
