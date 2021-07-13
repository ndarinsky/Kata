//https://leetcode.com/problems/squares-of-a-sorted-array/
var sortedSquares = function(A) {
    const result = [];
    let head = 0;
    let tail = A.length - 1;
  
    while (head <= tail) {
      if (A[head] ** 2 > A[tail] ** 2) result.push(A[head++] ** 2);
      else result.push(A[tail--] ** 2);
    }
  
    return result.reverse();
  };