//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let l = 0
    let r = nums.length-1
    while(l<r) {
        sum = nums[l]+nums[r]
        if(sum === target) {
            return [l+1,r+1]
        }
        if(sum>target){
            r--
        } else {
            l++
        }
    }
};