/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let depth = 0
    const result = []
    if (!root) {
        return result
    }

    function getDepthVal(root, depth, result) {
        if (!root) {
            return result
        }

        if (typeof root.val === 'number') {
            if (!result[depth]) {
                result[depth] = []
            }
            result[depth].push(root.val)
        }

        getDepthVal(root.left, depth + 1, result)
        getDepthVal(root.right, depth + 1, result)
        return result
    }

    return getDepthVal(root, depth, result).reverse()
}
// @lc code=end
