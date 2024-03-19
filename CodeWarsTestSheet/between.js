// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // your code her
  // if a is 1 and b is 4 the return array should 1, 2, 3, 4
  // create a empty array to store
  let betArr = [];
  // iterate the numbers starting at i = a and  i < equal or less b
  for (let i = a; i <= b; i++) {
    // push each number into the new array
    betArr.push(i);
  }
  // return the new Array
  return betArr;
}

// // function between(a, b) {
//   const betweenArray = []

//   while (a <= b) {
//     betweenArray.push(a);
//     a++;
//   }

//   return betweenArray;
// }

/*
 1) Let A = 1 and B = 10
 2) Determine which number is higher/lower
 3) Push lower number to start of array
 4) Add 1 to lower number until it's equal to the higher number
*/
