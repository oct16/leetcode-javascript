/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (checkDepth(root) === -1) {
        return false
    }
    return true
}

function checkDepth(root) {
    if (!root) {
        return 0
    }

    const left = checkDepth(root.left)
    if (left === -1) {
        return -1
    }
    const right = checkDepth(root.right)
    if (right === -1) {
        return -1
    }

    if (Math.abs(left - right) > 1) {
        return -1
    }
    return 1 + Math.max(left, right)
}
// @lc code=end
