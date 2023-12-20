// 1. given an array of numbers and strings, print (console.log) only the numbers

function printOnlyNumbers(array) {

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      console.log(array[i])
    } else {
      console.log("not a number")
    }
  }
}

// 2. given an array of arrays, where each sub array has a different length, print out all elements. Before each sub array, print the index of the current subarray

// let matrix = [[3, 6], [1], [7, 1, 2]]

// 0
// 3
// 6
// 1
// 1
// 2
// 7
// 1
// 2

function printAllArrayElements(matrix) {

//change i to row to make it clearer
  for (let row = 0; row < matrix.length; row++) {
    console.log(i)

//change j to colmun to make it clearer
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col])
    }
  }
}

// 3. given a 4x4 matrix, print out the elements from the top right corner to the bottom left corner

[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
] =>

4
7
10
13

function printDiagonal(matrix) {
    
      for (let row = 0; row < matrix.length; row++) {
     console.log(matrix[row][matrix.length - row - 1])
      }

}

// 4. given a 4x4 matrix, print out the elements from the bottom left corner to the top right corner
// [[1,2],[3,4]], output:
// 1
// 2
// 3
// 4

function printDiagonal(matrix) {
     
        for (let row = 0; row < matrix.length; row++) {
      console.log(matrix[row][row])
        }
}


// 5. given a 4x4 matrix, print out the elements from the top left corner to the bottom right corner
// [[1,2],[3,4]], output:
// 1
// 4

function printDiagonal(matrix) {
         
            for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row][row])
            }

}

// 6. given a 4x4 matrix, print out the elements from the bottom right corner to the top left corner
// [[1,2],[3,4]], output:
// 4
// 3
// 2
// 1

function printDiagonal(matrix) {
                 
                    for (let row = 0; row < matrix.length; row++) {
                console.log(matrix[row][row])
                    }

}

// class notes 

// for(let row = 0; row < matrix.length; row++){
//   console.log(row)
//    const currRow = matrix[row]
//   for(let col = 0; col < currRow.length; col++){
//     console.log(currRow[col])
//  }
// }




// for(const row of matrix){
//   for(const element of row){
//     console.log(element)
  // }
// }


matrix.map((row, idx)=>{
    console.log(row)
    row.map((ele, idx)=>{
        console.log(ele)
    })
})