// 1572. Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// 1. What is the input?   array of numbers within another array
// 2. What is the output? the sum of a diagonals in both directions
// 3. For each example, why does the input lead to the output?
// [1,5,9] is the main diagonal [3,5,7] is the off diagonal
// 4. Add more examples.
// 5. Explain each example in your own words. What is the input? What should the output be and why?

var diagonalSum = function (mat) {
  // init mainSum = 0
  // init offSum = 0
  let sum = 0;
  let rows = mat.length;
  // console.log("This is rows length in the main array: ", rows)
  // for each row..
  for (let row = 0; row < rows; row++) {
    // console.log("This is the matrix diagonal value: ", mat[row][row]) // main diagonal = [1, 5, 9] mat[0][0]
    sum += mat[row][row]; // add the element at the main diagonal to the mainSum

    sum += mat[row][mat.length - 1 - row];
    console.log("this is index/row: ", row);
    console.log("This is index/mat.length - 1 - row: ", mat.length - 1 - row);
    if (row === mat.length - 1 - row) {
      console.log(mat.length - 1 - row);
      console.log(
        "This is the matrix diagonal value: ",
        mat[row][mat.length - 1 - row]
      ); // off diagonal = [3, 5, 7] mat[0][2]

      sum -= mat[row][row]; // subtract the element at the off diagonal to the sum
    }
  }
  console.log("I wanna see the sum change: ", sum);
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
// Output: 8

console.log(diagonalSum([[5]]));
// Output: 5
// [
// [1,2,3]
// [4,5,6]
// [7,8,9]
// ] main =1,5,9 off = 3,5,7

console.log(
  diagonalSum([
    [4, 6, 7],
    [2, 9, 4],
    [5, 5, 5],
  ])
);
// [4,6,7]
// [2,9,4]
// [5,5,5]  main = 4, 9, 5  off = 7, 9 ,5 total
// output : 30
