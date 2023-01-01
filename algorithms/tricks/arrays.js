//2 dimensional array 3x4
//WRONG:
const arr1 = new Array(3).fill(new Array(4))
console.log(arr1)
arr1[0][1] = 'test'
console.log(arr1) 
//we created subarray and put refs on it in each row.

//WRONG:
const arr2 = new Array(3).map(() => new Array(4))
console.log(arr2)
// arr2[0][1] = 'test' //TypeError: Cannot set properties of undefined (setting '1')
console.log(arr2)
//instead of rows arr2[0] will be undefined

//CORRECT:
const arr3 = new Array(3).fill(0).map(() => new Array(4))
console.log(arr3)
arr3[0][1] = 'test' //TypeError: Cannot set properties of undefined (setting '1')
console.log(arr3)

const arr4 = new Array(3).fill(0).map((a,i) => new Array(4).fill(i))
console.log(arr4)
console.log(arr4[-1][1] || 0)
