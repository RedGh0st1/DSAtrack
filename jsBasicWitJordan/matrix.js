// given a 3x3 matrix where each eleement of each subarray is a number between 1 and 3. Find any elements that are set to null and set them to the correct number.

//   The correct number will be the number that has not shown up in that row or column yet.

// [
//   [1,2,3],
//   [2,3,1],
//   [3,1,2]
// ]

matrix = [
  [null, 2, 3],
  [2, null, 1],
  [3, 1, 2],
]
// output =[([1, 2, 3], [2, 3, 1], [3, 1, 2])]   []
// Given an array of 3 elements, where each element is a number 1-3 and no number is repeated,
//  find any null elements and set them to the correct number.

//   (1, 3, null)

function ReplaceAllNullelements(matrix) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[j])
      if (matrix[i][j] === null) {
        const row = matrix[i].filter((num) => num !== null)
        const cols = matrix.map((cols) => cols.filter((num) => num !== null))
      }
    }
  }
  return result
}
