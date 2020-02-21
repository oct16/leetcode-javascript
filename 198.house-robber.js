/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = []
    function robAdjacent(nums) {
        if (!nums.length) {
            return 0
        }
        if (nums.length === 1) {
            return nums[0]
        }
        if (!isNaN(memo[nums.length])) {
            return memo[nums.length]
        }
        const money = Math.max(nums[0] + robAdjacent(nums.slice(2)), nums[1] + robAdjacent(nums.slice(3)))
        memo[nums.length] = money
        return money
    }
    return robAdjacent(nums)
}
// @lc code=end
