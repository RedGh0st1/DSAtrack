// declare a function that has parameter called numbers
//  create variable to hold array of numbers
// loop thru array of numbers
// addind each number to the variable

const createPhoneNumber = (numbers) =>
  "(" +
  numbers.substr(0, 3) +
  ")" +
  numbers.substr(3, 3) +
  " - " +
  numbers.substr(6)

//   function createPhoneNumber(numbers) {
//     var format = "(xxx) xxx-xxxx";

//     for (var i = 0; i < numbers.length; i++) {
//       format = format.replace("x", numbers[i]);
//     }
//     return format;
//   }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// output >>>> , (123) 456-7890
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// output >>> (111) 111-1111
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// output >> , (123) 456-7890
