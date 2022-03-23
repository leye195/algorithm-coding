/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let le = 0;
    let ri = matrix[i].length - 1;

    while (le <= ri) {
      const mid = Math.floor((le + ri) / 2);

      if (matrix[i][mid] === target) return true;
      else if (matrix[i][mid] > target) {
        ri = mid - 1;
      } else {
        le = mid + 1;
      }
    }
  }

  return false;

  /**
   * 
    let row = 0;
    let col = matrix[0].length-1;
        
    while(row>=0&&row<matrix.length&&col>=0&&col<matrix[0].length) {
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }

    return false;
   */
};
