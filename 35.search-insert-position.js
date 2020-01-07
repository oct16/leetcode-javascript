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
    const ret = nums.indexOf(target)

    function searchSibling(arr, target) {
        if (target < arr[0]) {
            return nums.indexOf(arr[0])
        }

        if (target > arr[arr.length - 1]) {
            return nums.indexOf(arr[arr.length - 1]) + 1
        }

        let pivot = Math.floor(arr.length / 2)

        if (target <= arr[pivot]) {
            return searchSibling(arr.slice(0, pivot), target)
        }
        return searchSibling(arr.slice(pivot), target)
    }

    if (ret === -1) {
        return searchSibling(nums, target)
    }

    return ret
}
// @lc code=end

