/**
 * Write a function that takes two arrays as inputs and returns to us their intersection? 
 * Let's return the intersection of the two inputs in the form of an array.
 * Definition of an intersection of two sets A and B is the set containing all elements of A that also belong to B
 * (or equivalently, all elements of B that also belong to A).

------------------------
 Constraints
    Length of the array <= 100000
    The values in the array will be in the range -1000000000 and 1000000000
    Expected time complexity: O(n+m) where n and m are the lengths of the array.
    Expected space complexity: O(max(n,m)).
 */

//Solution via JS set
function getIntersection(a, b) {
    const result = new Set(a)
    b.forEach(element => {
      result.add(element)  
    });

    return Array.from(result)
}

const test1 = getIntersection([1, 2, 2, 1], [2, 2])
console.log(test1)

const test2 = getIntersection([1, 2, 3, 1], [2, 2, 4])
console.log(test2)

const test3 = getIntersection([1, -2, 2, 0], [1, 0, 2, 2])
console.log(test3)
