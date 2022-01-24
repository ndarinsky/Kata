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