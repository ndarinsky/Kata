//https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
var leftMostColumnWithOne = function(binaryMatrix) {
    let r,c, done;
    [r,c] = binaryMatrix.dimensions();
    let range, leftmost = c;
    for (let row = 0; row < r; row++) {
        if(binaryMatrix.get(row,leftmost-1) == 1) {
            if(binaryMatrix.get(row,0) == 1) { return 0; }
            leftmost--;
            range = leftmost - 1;
            while(range) {
                if(binaryMatrix.get(row,leftmost-range) == 1) {
                    leftmost -= range;
                }
                range = range >> 1
            }
            while(binaryMatrix.get(row,leftmost-1) == 1) { leftmost--; }
        }
    }
    if (leftmost == c) { return -1; }
    return leftmost;
};