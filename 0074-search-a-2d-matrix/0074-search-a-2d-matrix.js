/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // let result = []
    const numRows = matrix.length
    const numCols = matrix[0].length

    let low = 0, high = numRows * numCols - 1

    while(low <= high){
        const mid = Math.floor((low + high) / 2)
        const row = Math.floor(mid/numCols)
        const col = mid % numCols
        const midValue = matrix[row][col]
     
        if (midValue === target) return true
        else if (midValue < target) low = mid + 1
        else high = mid - 1

    } 
   
    return false
};