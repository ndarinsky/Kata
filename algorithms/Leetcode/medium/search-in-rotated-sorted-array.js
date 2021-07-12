/*
We have two sorted subarrays in given array.

We can use binary search to find the target value.
To do so, we do the general binary search with an extra behaviour.
That is, whenever we're in a wrong subarray (subarray where target number doesn't exist),
we should try to move towards the correct subarray. 

How do we figure out if we are in the correct subarray? 
The last value of given array is the maximum value of second sorted subarray.
Therefore, if our target is smaller than or equal to that value, we should try to
go to second sorted subarray. If our target is greater than that value, we should try to
go to first sorted subarray.
*/
var search = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    let low = 0, high = nums.length - 1;
    let lastVal = nums[nums.length-1];
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let inCorrectSubarr = (nums[mid] <= lastVal && target <= lastVal) || 
            (nums[mid] > lastVal && target > lastVal);
        if (nums[mid] > target) {
            inCorrectSubarr ? high = mid-1 : low = mid+1;
        } else if (nums[mid] < target) {
            inCorrectSubarr ? low = mid+1 : high = mid-1;
        } else {
            return mid;
        }
    }
    return -1;
    // T.C: O(log(N))
    // S.C: O(1)
};