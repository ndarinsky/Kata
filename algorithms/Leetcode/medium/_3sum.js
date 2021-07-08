//https://leetcode.com/problems/3sum
const threeSum = (nums) => {
    const triplets = [];
    if (nums.length < 3) {
      return triplets;
    }
  
    nums.sort((a, b) => (a - b));
  
    for (let i = 0; i < nums.length - 2; i++) { //O(N)
      let a = nums[i];
      if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) {
        continue;
      }
  
      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {  //(O(N))
        let b = nums[left];
        let c = nums[right];
        let sum = a + b + c;
        if (sum === 0) {
          triplets.push([a, b, c]);
          while (nums[left] === nums[left + 1]) { //skip dubl
            left++;
          }
          while (nums[right] === nums[right - 1]) {//skip dubl
            right--;
          }
          left++;
          right--;
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
    return triplets;
  };