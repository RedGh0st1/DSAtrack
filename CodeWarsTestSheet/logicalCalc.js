// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
//1.  booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False

//2. booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True

//3. booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False

// Input
//1. an array of Boolean values (1 <= array_length <= 50)
//2/ a string specifying a logical operator: "AND", "OR", "XOR"

// Output
// A Boolean value (True or False).

function logicalCalc(array, op) {
  //your code here

  if (array.length === 1) return array[0];
  let result = op === "AND" ? true : false;

  for (let i = 0; i < array.length; i++) {
    //  If result is  (true) and array[i] is (true), then the overall result is ON (true).
    //  If either result or array[i] is OFF (false), then the overall result is OFF (false).
    if (op === "AND") result = result && array[i];
    // If result is  (true) or array[i] is (true), then the overall result is ON (true).
    // Only if both result and array[i] are  (false), then the overall result is OFF (false).
    else if (op === "OR") result = result || array[i];
    // if result is  (true) and array[i] is  (false), or vice versa, then the overall result is ON (true).
    //  If both result and array[i] are either ON or OFF, then the overall result is OFF (false).
    else if (op === "XOR") result = result !== array[i];
  }

  return result;
}

console.log(logicalCalc([true, true, true, false], "AND") === false);
console.log(logicalCalc([true, true, true, false], "OR") === true);
console.log(logicalCalc([true, true, true, false], "XOR") === true);
console.log(logicalCalc([true, true, false, false], "AND") === false);
console.log(logicalCalc([true, true, false, false], "OR") === true);
console.log(logicalCalc([true, true, false, false], "XOR") === false);
console.log(logicalCalc([true, false, false, false], "AND") === false);
console.log(logicalCalc([true, false, false, false], "OR") === true);
console.log(logicalCalc([true, false, false, false], "XOR") === true);
console.log(logicalCalc([true, true], "AND") === true);
console.log(logicalCalc([true, true], "OR") === true);
console.log(logicalCalc([true, true], "XOR") === false);
console.log(logicalCalc([false, false], "AND") === false);
console.log(logicalCalc([false, false], "OR") === false);
console.log(logicalCalc([false, false], "XOR") === false);
console.log(logicalCalc([false], "AND") === false);
console.log(logicalCalc([false], "OR") === false);
console.log(logicalCalc([false], "XOR") === false);
console.log(logicalCalc([true], "AND") === true);
console.log(logicalCalc([true], "OR") === true);
console.log(logicalCalc([true], "XOR") === true);

//another version1
// function logicalCalc(array, op) {
//   if (array.length === 1) return array[0]; // If array has only one element, return that element

//   for (let i = 0; i < array.length - 1; i++) {
//     if (op === "AND") return array[array.length - 1];    // Return last element if op is AND
//     else if (op === "OR") return array[0];   // Return first element if op is OR
//     else if (op === "XOR") {
//       let result = array[0];    // Initialize result with the first element
//       for (let i = 1; i < array.length; i++) {
//         result = result !== array[i];    // Apply XOR operation
//       }
//       return result; // Return the final result
//     }
//   }
// }

//version 2
// const logicalCalc = (array, op) => {
//     return array.reduce((acc, cur) => {
//       if (op === 'AND') return acc && cur;
//       if (op === 'OR') return acc || cur;
//       if (op === 'XOR') return acc != cur;
//     });
//   };

//version 3
// const logicalCalc = (array, op) =>
//   array.reduce((a, b) =>
//     op === 'AND' ? a && b : op === 'OR' ? a || b : a !== b
//   );

//version 4
// function logicalCalc(array, op) {
//   switch (op) {
//     case "AND": return array.reduce(and);
//     case "OR" : return array.reduce(or);
//     case "XOR": return array.reduce(xor);
//   }
// }

// function and(bool1, bool2) {
//   return bool1 && bool2;
// }

// function or(bool1, bool2) {
//   return bool1 || bool2;
// }

// function xor(bool1, bool2) {
//   return bool1 != bool2;
// }
