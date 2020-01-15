/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    
    let depth = 1
    const leftDepth = (root.left ? maxDepth(root.left) : 0)
    const rightDepth = (root.right ? maxDepth(root.right) : 0)

    return depth + Math.max(leftDepth, rightDepth)
}
// @lc code=end
