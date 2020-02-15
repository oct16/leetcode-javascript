/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = nums[0]
    for (let i = 1; i < nums.length; i++) {
        num ^= nums[i]
    }
    return num
}
// @lc code=end
