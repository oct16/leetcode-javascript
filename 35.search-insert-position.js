/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function searchSibling(arr, { low, high }, target) {
        if (target <= arr[0]) {
            return low
        }

        if (target > arr[arr.length - 1]) {
            return high + 1
        }

        if (target === arr[arr.length - 1]) {
            return high
        }

        if (target === arr[arr.length - 1]) {
            return nums.indexOf(arr[arr.length - 1])
        }

        let pivot = Math.floor(arr.length / 2)

        if (target < arr[pivot]) {
            const _nums = arr.slice(0, pivot)
            return searchSibling(_nums, { low, high: low + _nums.length - 1 }, target)
        }
        const _nums = arr.slice(pivot)
        return searchSibling(_nums, { low: high - _nums.length + 1, high }, target)
    }

    return searchSibling(nums, { low: 0, high: nums.length - 1 }, target)
}
// @lc code=end
