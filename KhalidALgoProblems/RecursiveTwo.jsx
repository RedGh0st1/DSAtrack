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

console.log(addRecursion([1, 2, 3, 4])); //[1+2+3+4=10]

// version khalid

function sunRecursion(arr, idx = 0) {
  if (arr.length === idx) return 0;
  else return arr[idx] + sunRecursion(arr, idx + 1);
}
