/**
 * @callback func
 * @return {Function}
 */
function curry(func) {
    return function curried(...args) {
      function fn(...args2) {
        return curried.apply(this, [...args, ...args2]);
      }
      // Define using an arrow function to preserve `this`.
      fn[Symbol.toPrimitive] = () => {
        return func.apply(this, args);
      };
      return fn;
    };
  }
  

function multiply(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

const curriedMultiply = curry(multiply);
const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree); // 3
console.log(multiplyByThree(4)); // 12

const multiplyByFifteen = multiplyByThree(5);
console.log(multiplyByFifteen); // 15
console.log(multiplyByFifteen(2)); // 30

console.log(curriedMultiply(1)(2)(3)(4)); // 24
console.log(curriedMultiply(1, 2, 3, 4)); // 24
  