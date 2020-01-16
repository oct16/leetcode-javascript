/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            const pivot = Math.floor((left + right) / 2)
            const mid = nums[pivot]

            if (mid === target) {
                return pivot
            }

            if (mid < target && target < nums[right]) {
                left = pivot + 1
            } else if (nums[left] < target && target < mid) {
                right = pivot - 1
            } else {
                break
            }
        }

        return nums[left] === target ? left : nums[right] === target ? right : -1
    }

    const index = search(nums, target)

    if (~index) {
        let left = index
        let right = index
        while (nums[left] === target) {
            if (nums[left] === target) {
                left--
            }
        }
        while (nums[right] === target) {
            if (nums[right] === target) {
                right++
            }
        }
        return [left + 1, right - 1]
    }
    return [-1, -1]
}
// @lc code=end

