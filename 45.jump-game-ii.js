/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let end = 0
    let maxPosition = 0
    let steps = 0
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, nums[i] + i)
        if (end === i) {
            end = maxPosition
            steps++
        }
    }
    return steps
}
// @lc code=end
