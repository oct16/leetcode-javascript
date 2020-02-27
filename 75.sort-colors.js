/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let cur = 0
    let p0 = 0
    let p2 = nums.length - 1

    while (cur <= p2) {
        if (nums[cur] === 2) {
            swap(nums, cur, p2)
            p2--
        } else if (nums[cur] === 0) {
            swap(nums, cur, p0)
            p0++
            cur++
        } else {
            cur++
        }
    }
}

function swap(nums, i, j) {
    if (i === j) {
        return
    }
    nums[i] = nums[i] ^ nums[j]
    nums[j] = nums[i] ^ nums[j]
    nums[i] = nums[i] ^ nums[j]
}
// @lc code=end

