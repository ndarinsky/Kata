//https://leetcode.com/problems/sort-an-array/
//quicksort
var sortArray = function(nums) {
    let quickSort = (arr) => {
        if (arr.length < 2) {
            return arr;
        }
        
        let pivot = Math.round(arr.length / 2);
        let left = arr.filter(e => e < arr[pivot]);
        let mid = arr.filter(e => e === arr[pivot]);
        let right = arr.filter(e => e > arr[pivot]);
        
        return [...quickSort(left), ...mid, ...quickSort(right)]
    }
    
    return quickSort(nums);
}

//MergeSort
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    return mergeSort(nums)
};

const mergeSort = (arr) => {
    if (arr.length < 2) return arr || []
    const mid = arr.length >> 1
    
    const left = mergeSort(arr.slice(0, mid) || [])
    const right = mergeSort(arr.slice(mid) || [])
    
    return swap(left, right)    
}

const swap = (arr1, arr2) => {
    let left = 0
    let right = 0
    
    const result = []
    while (left < arr1.length || right < arr2.length) {
        if (left >= arr1.length) {
            result.push(arr2[right])
            right++
            continue
        }
        if (right >= arr2.length) {
            result.push(arr1[left])
            left++
            continue
        }
        if (arr1[left] < arr2[right]) {
            result.push(arr1[left])
            left++
        } else {
            result.push(arr2[right])
            right++
        }
    }
    
    return result
}