function curry(func) {
    return function curried(...args) {
        if (args.length === func.length) {
            return func.apply(this, args)
        }

        return function(...args1) {
            return curried.apply(this, [...args, ...args1])
        }
    }
}



//Write function which can be used like this:
function multiplyThree(a, b, c) {
    const result = a * b * c;
    console.log(result)
    return result
}
const curriedMultiplyThree = curry(multiplyThree);
curriedMultiplyThree(4)(5)(6); // 120
curriedMultiplyThree(4)(5, 6); // 120
curriedMultiplyThree(4, 5)(6); // 120
curriedMultiplyThree(4, 5, 6); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6); // 120