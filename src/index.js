
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {return [];}
  else {
  for (let item in matrix) {
  if (item%2 !== 0) {matrix[item] = matrix[item].reverse();}
  }
  let arr = matrix.reduce (function(a,b) {return a.concat(b)})
  
  return arr;
}
}; 

