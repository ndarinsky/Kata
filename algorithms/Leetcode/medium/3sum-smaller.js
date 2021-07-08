//https://leetcode.com/problems/3sum-smaller/
const check = (nums, start, target) => {
    let res = 0
    let l=start
    let r=nums.length-1
    while (l<r) {
        const sum = nums[l] + nums[r]
        if (sum<target) {
           res+=r-l
            l++
        } else {
            r--
        }
    }
    return res
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    const sorted = nums.sort((a,b) => a-b) //O(logN)
    let result = 0
    
    for (let i = 0; i<nums.length-2; i++) { //O(n)
        const cur = target - sorted[i]
        const rest = check(sorted, i+1, cur) //O(n)
        result+= rest
    }
    
    return result
};