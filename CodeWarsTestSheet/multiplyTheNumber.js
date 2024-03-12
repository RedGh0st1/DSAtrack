//Jack really likes his number five:
// the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers,

function multiply(number) {
  // Convert the absolute value of the input number to a string
  let numberStr = Math.abs(number).toString();

  // Get the length of the string (number of digits)
  let length = numberStr.length;

  // Multiply the original number by 5 raised to the power of its length
  return number * Math.pow(5, length);
}

console.log(multiply(10) === 250); // true
console.log(multiply(5) === 25); // true
console.log(multiply(200) === 25000); // true
console.log(multiply(0) === 0); // true
console.log(multiply(-2) === -10); // true
console.log(multiply(1661018) === 129767031250); // true
// It's not muliplying properly! - Expected: 129767031250, instead got: 207627250
