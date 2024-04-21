// Create a function shuffleIt. The function accepts two or more parameters.
// The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays.
// Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds).
// For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// Example:

var shuffleIt = (arr, ...arrS) => {
  // iterate through the array
  arrS.forEach((pair) => {
    // index of the first element
    let idx1 = pair[0];
    console.log("This is idx1: ", idx1);
    // index of the second element
    let idx2 = pair[1];

    console.log("This is idx2: ", idx2);
    console.log("This is arr: ", arr);
    console.log("This is arrS: ", arrS);
    console.log("This is pair: ", pair);
    console.log(arr[idx1], arr[idx2])[(arr[idx1], arr[idx2])] = [
      arr[idx2],
      arr[idx1],
    ]; // Swapping using destructuring assignment
  });

  // return the modified array
  return arr;
};

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
// output  === [1,3,2,4,5]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
// output=== [1,3,2,5,4]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
// output=== === [1,3,5,2,4]

// version2
// function shuffleIt(arr, ...exchanges){
//     exchanges.forEach(([i, j]) => [arr[i], arr[j]] = [arr[j], arr[i]]);
//     return arr;
//   }

// version3
// function shuffleIt(arr,...swaps) {
//     for (swap of swaps) {
//       var [a, b] = swap;
//       [arr[a], arr[b]] = [arr[b], arr[a]];
//     }
//      return arr;
//    }

// version4
// function shuffleIt(arr,...swaps) {
//     return swaps.reduce((a,[i,j])=>([a[i],a[j]] = [a[j],a[i]],a),arr.slice());
//   }
