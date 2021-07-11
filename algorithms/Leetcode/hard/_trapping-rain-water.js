//https://leetcode.com/problems/trapping-rain-water
var trap = function(heights) {
	if (height === null || height.length === 0) {
		return 0;
	}
    let trapped = 0, low = 0, high = heights.length-1;
    let leftMax = 0, rightMax = 0;
    while (low < high) {
        if (heights[low] <= heights[high]) { 
            // we know that there is wall in the right that is either equal to
            // or higher than our tallest wall in the left
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (leftMax > heights[low]) trapped += leftMax - heights[low];
            else leftMax = heights[low];
            low++;
        } else {
            // we know that there is wall in the left that is either equal to
            // or higher than our tallest wall in the right
            // that's why our index has moved so far and we are in this conditional
            // statement
            if (rightMax > heights[high]) trapped += rightMax - heights[high];
            else rightMax = heights[high];
            high--;
        }
    }
    return trapped;
    // Two Pointer
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}