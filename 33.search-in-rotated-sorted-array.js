/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        const pivot = Math.floor((start + end) / 2)
        const mid = nums[pivot]

        if (mid === target) {
            return pivot
        }

        // non-rotated
        if (mid > nums[start]) {
            if (nums[start] <= target && target < mid) {
                end = pivot - 1
            } else {
                start = pivot + 1
            }
        } else if (mid < nums[end]) {
            if (target > mid && target <= nums[end]) {
                start = pivot + 1
            } else {
                end = pivot - 1
            }
        } else {
            break
        }
    }
    return nums[end] === target ? end : -1
}
// @lc code=end
