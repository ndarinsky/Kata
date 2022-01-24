//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
/**
 * 
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
 */

const bruteforce = (arr, k) => {
    let max = 0
    let cur
    for(let i=0; i<arr.length-k; i++) {
        cur = 0
        for (let j=0; j<k; j++) {
            cur+=arr[i+j]
        }
        max = Math.max(max, cur)
    }   

    console.log(max)
}

bruteforce([2, 1, 5, 1, 3, 2], 3)
bruteforce([2, 3, 4, 1, 5], 2)

//--------
const slidingWindow = (arr, k) => {
    let max = 0
    let cur = 0
    for(let i=0; i<arr.length-k; i++) {
        if (i === 0) {
            for (let j=0; j<k; j++) {
                cur+=arr[i+j]
            }
        } else {
            cur = cur+arr[i+k-1]-arr[i-1]
        }
        max = Math.max(max, cur)
    }   

    console.log(max)
}

slidingWindow([2, 1, 5, 1, 3, 2], 3)
slidingWindow([2, 3, 4, 1, 5], 2)