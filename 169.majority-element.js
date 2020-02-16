/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort()
    const mid = Math.floor(nums.length / 2)
    const left = nums[mid - 1]
    const right = nums[mid]
    if (left === right) {
        return left
    } else {
        return right
    }
}
// @lc code=end
