
module.exports = function towelSort (matrix) {
  console.log(matrix);
  
  if(matrix === undefined) {
   return []; 
  }
  
  if(matrix.length === 2) {
    return matrix[0].concat(matrix[1].reverse());//?
      }
  
  if(matrix.length === 3) {
  let res1 = matrix[0].concat(matrix[1].reverse());
  return res1.concat(matrix[2]);//?
    }
   
   if(matrix.length === 4) {
   let res1 = matrix[0].concat(matrix[1].reverse());//?
   let res2 = matrix[2].concat(matrix[3].reverse());//?
  return res1.concat(res2)
   }
   return [];
}
