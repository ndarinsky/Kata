//https://leetcode.com/problems/fibonacci-number/
const cache = {}

var fib = function(n) {
  if (n<2) return n
  const key = n.toString()
  if (cache[key]) {
    return cache[key]
  }
  cache[key] = fib(n-1) + fib(n-2)
  return cache[key]
};

console.log(fib(4))