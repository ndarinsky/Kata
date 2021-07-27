//https://leetcode.com/problems/diameter-of-binary-tree/
var diameterOfBinaryTree = function(root) {
    if (!root) return null;
    let max = 0;
    getHeight(root);
    return max;
    function getHeight(root) {
      if (!root) return 0; // height is defined to be the number of nodes in the path in this particular question instead of the number of edges
      let leftHeight = getHeight(root.left);
      let rightHeight = getHeight(root.right);
      max = Math.max(max, leftHeight + rightHeight);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }; 
  
  // Diameter: Height of left subtree + Height of right subtree
  // Height: Max(Height of left subtree, Height of right subtree) + 1    

  //Solution2:
  const getDepth = (node, result) => {
    if (!node.left && !node.right) return 1
    let left = 0
    if (node.left) {
        left = getDepth(node.left, result)
    }
    
    let right = 0
    if (node.right) {
        right = getDepth(node.right, result)
    }
    result.value = Math.max(result.value, left+right)
    
    return Math.max(left,right)+1
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let result = {value:0}
    getDepth(root, result)
    
    return result.value
};