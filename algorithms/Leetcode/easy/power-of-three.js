//https://leetcode.com/problems/power-of-three/solution/
//Solution 1
var isPowerOfThree = function(n) {
    const base3 = n.toString(3)
    console.log(base3)
    const reg = new RegExp(/1(0+)$/i)
    return !!reg.test(base3)
};
console.log(isPowerOfThree(-3))
console.log(isPowerOfThree(19684))
console.log(isPowerOfThree(45))
console.log(isPowerOfThree(81))

//Solution 2
var isPowerOfThree2 = function(n) {
	let exponent = (Math.log(n) / Math.log(3)).toFixed(10);
	return (exponent % 1 === 0) ? true : false;
}

//Solution 3
var isPowerOfThree3 = function(n) {
	return n > 0 && 1162261467 % n === 0; //3^19
}
