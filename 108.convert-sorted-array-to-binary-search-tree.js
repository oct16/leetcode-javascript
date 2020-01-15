/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null
    const pivot = Math.floor(nums.length / 2)
    const mid = nums[pivot]
    const root = new ListNode(mid)
    root.left = sortedArrayToBST(nums.slice(0, pivot))
    root.right = sortedArrayToBST(nums.slice(pivot + 1))
    return root
}
// @lc code=end
