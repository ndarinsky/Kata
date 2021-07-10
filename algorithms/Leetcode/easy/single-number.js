//https://leetcode.com/problems/single-number
//Solution 1
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    
    const sorted = nums.sort((a,b) => a-b) //O(log N)
      
    for (let i=0; i<sorted.length; i++) {
        if (sorted[i] === sorted[i+1]){
            i++
        } else {
            return sorted[i]
        }
    }
    
  };

//Solution 2
  var singleNumber = function(nums) {
    return nums.reduce((a, b) => a^b);
};