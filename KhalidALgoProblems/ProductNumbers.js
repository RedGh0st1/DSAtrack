// Find the product of all numbers in an array of numbers. The product of an empty arry  is 1
/* iterate array 
for each index in array
multiply current total by next element 
return final total
*/

// const findProduct = (arr) => {
//   if (arr.length === 1) return arr[0];

//   let result = 1;
//   for (let i = 0; i < arr.length; i++) {
//     result * arr[i];
//   }

//   return result;
// };

//recursivly
const findProductRecursively = (arr) => {
  if (arr.length === 1) return 1;
  else return findProductRecursively(arr.slice(1)) * arr[0];
};

function product(arr, idx = 0) {
  //base case length of [4] is 1
  if (arr.length === idx) return 1;
  if (arr[idx] === 0) return product(arr, idx + 1);
  return arr[idx] * product(arr, idx + 1); // or ++idx
}

console.log(findProduct([2, 3, 4])); //6
console.log(findProduct([1, 2, 3, 4, 5])); //12
console.log(findProductRecursively([2, 3, 3, 4, 5, 5]));
