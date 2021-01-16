
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      let arr = matrix[i];
      if (i % 2 === 1) {
          arr = arr.reverse();
      }
     result = result.concat(arr);
     }
     return result;
  }


