// given a function that accepts an array, return the sum of the arrays elements recursion

//4 + 3 = 7 .   4 is the last element in this array so we add it to the next number which is 3.
// grab the last element in the array we need arr[arr.length -1] and then the next element value is 3
//7 + 2 = 9
//9 + 1 = 10
// input = [1, 2, 3, 4];

const addRecursion = (arr) => {
  console.log(arr);
  if (arr.length === 0) return 0;
  else return arr[0] + addRecursion(arr.slice(1));
};

// console.log(addRecursion([1, 2, 3, 4])); //[1+2+3+4=10]

// version khalid

function sunRecursion(arr, idx = 0) {
  if (arr.length === idx) return 0;
  else return arr[idx] + sunRecursion(arr, idx + 1);
}

// flatten an array using recursion
// [1,[2,[3,4]]]
// so we need to get rid of the arrays and have one array
// either a number or array

const flattenArrRecursively = (matrix) => {
  if (Array.isArray(matrix[0])) return matrix;
  else return matrix[0].concat(flattenArrRecursively(matrix.slice(1)));
};

console.log([1, [2, [3, 4]]]);
//output = [1,2,3,4]

// khalid version
//output must be an array
function flat(arr) {
  //empty array should return an empty array
  if (arr.length === 0) return 0;
  if (typeof arr[0] === "number") return [arr.shidft()].concat(flat(arr)); // shift means remove first element from array moves 1 from the array and you will have [[2,[3,4]]]
  if (Array.isArray(arr[0])) return flat(arr.shift()).concat(flat(arr));
}

console.log(flat());
