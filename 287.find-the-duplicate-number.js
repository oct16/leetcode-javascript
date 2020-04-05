/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const min = Math.min.apply(null, nums)
    const max = Math.max.apply(null, nums)
    const result = []
    for (let i = min; i < max; i++) {
        if (!nums.includes(i)) {
            result.push(i)
        }
    }

    return result
    // @lc code=end
}
