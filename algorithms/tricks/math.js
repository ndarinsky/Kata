//n ** m  =>  n ^ m
//возведение в степень
console.log(2**3) //8
console.log(3**3) //27

// convert to binary
const i = 5
console.log(i.toString(2))

// get base10 from binary
parseInt("11000", 2) //24

//logarithms:
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// expected output: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// expected output: 4

//max of array:
Math.max(arr) //won't work
Math.max(...arr) //correct

console.log(Number.MAX_VALUE)
