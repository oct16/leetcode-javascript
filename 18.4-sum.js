/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)

    let i, j, k, l, sum
    let len = nums.length
    let res = []
    for (i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (j = i + 1; j < len - 2; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue

            k = j + 1
            l = len - 1
            while (k < l) {
                sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]])

                    while (nums[k + 1] === nums[k]) k++
                    while (nums[l - 1] === nums[l]) l--

                    k++
                    l--
                } else if (sum > target) {
                    l--
                } else {
                    k++
                }
            }
        }
    }
    return res
}
// // @lc code=end
