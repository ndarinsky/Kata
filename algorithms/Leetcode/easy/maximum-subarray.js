//https://leetcode.com/problems/maximum-subarray

//Divide N conquer
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    return getMax(0, nums.length-1, nums)
};

const getMax = (left, right, arr) => {
    if (left>right) return -1000000
    
    let leftMax = 0
    let rightMax = 0 
    const mid = (right+left) >> 1
    
    let cur = 0
    for (let i=mid-1; i>=left; i--) {
        cur += arr[i]
        leftMax = Math.max(leftMax, cur)
    }
    
    cur = 0
    for (let i=mid+1; i<=right; i++) {
        cur += arr[i]
        rightMax = Math.max(rightMax, cur)
    }
    
    const combinedMax = arr[mid]+leftMax+rightMax
    
    let leftHalf = getMax(left, mid-1, arr)
    let rightHalf = getMax(mid+1, right, arr)
    
    return Math.max(combinedMax, Math.max(leftHalf, rightHalf))
}