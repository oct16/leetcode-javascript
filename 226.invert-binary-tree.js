/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    if (root.left || root.right) {
        let temp = root.left
        root.left = root.right
        root.right = temp
    }
    root.left && invertTree(root.left)
    root.right && invertTree(root.right)
    return root
}
// @lc code=end
