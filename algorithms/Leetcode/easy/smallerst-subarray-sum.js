
// Given an array of positive numbers and a positive number ‘S,’
// Find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0 if no such subarray exists
const smallest_subarray_sum = function(s, arr) {
    let left = 0
    let right = 0
    let sum = 0
    let length = arr.length
    while (right<=arr.length) {
      if (sum<s) {
        sum+=arr[right]
        right++
      } else if (sum===s){
        length = Math.min(length, right-left)
        sum+=arr[right]
        right++
        } else{
        length = Math.min(length, right-left)
        sum-=arr[left]
        left++
      }
        
    }

    console.log(length)
    return length;
  };

  smallest_subarray_sum(7, [2,1,5,2,3,2])
  smallest_subarray_sum(7, [2,1,5,2,8])