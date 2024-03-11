//Jack really likes his number five:
// the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers,
// so, for example:

function multiply(number) {
  let nums;
  let numberStr = Math.abs(number).toString();
  if (numberStr.length === 1) {
    return number * 5;
  } else if (numberStr.length === 2) {
    nums = number * 5;
    return nums * 5;
  } else if (numberStr.length >= 3) {
    nums = number * 5;
    return nums * 5 * 5;
  }
}

console.log(multiply(10) === 250); // true
console.log(multiply(5) === 25); // true
console.log(multiply(200) === 25000); // true
console.log(multiply(0) === 0); // true
console.log(multiply(-2) === -10); // true
