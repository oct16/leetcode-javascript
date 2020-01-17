/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0
    const set = new Set(nums)
    while (++i) {
        if (!set.has(i)) {
            return i
        }
    }
}
// @lc code=end

console.log(firstMissingPositive([]))
