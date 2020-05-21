/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0
    for (var i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i]
    }
    return sum
}
// @lc code=end

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
