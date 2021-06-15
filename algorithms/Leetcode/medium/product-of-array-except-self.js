/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * 50m 
 */

var productExceptSelf = function(nums) {
    let result = []
    for (let i=0; i<nums.length; i++) {
        result.push(1)
      }
   
    let start = nums[0]
    let end = nums[nums.length-1]
    for (let i=1; i<nums.length; i++) {
        result[i] = result[i] * start
        result[nums.length-i-1] = result[nums.length-i-1] * end
        start = start * nums[i]
        end = end * nums[nums.length-i-1]
    }
      
    return result
  };

  console.log(productExceptSelf([1,2,3,4]))

  //[24,12,8,6]