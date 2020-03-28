/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0
    }
    return pathSumStart(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

function pathSumStart(root, sum) {
    if (!root) {
        return 0
    }
    return (
        (root.val === sum ? 1 : 0) + pathSumStart(root.left, sum - root.val) + pathSumStart(root.right, sum - root.val)
    )
}

// @lc code=end
