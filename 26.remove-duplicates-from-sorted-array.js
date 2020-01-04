/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 0
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            k++
        } else {
            nums[i - k] = nums[i]
        }
    }

    return nums.length - k
}
// @lc code=end
