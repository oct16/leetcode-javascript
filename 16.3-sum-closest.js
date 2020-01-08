/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = nums[0] + nums[1] + nums[nums.length - 1]
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === target) {
                return sum
            } else if (sum > target) {
                k--
            } else {
                j++
            }
            const distance = Math.abs(sum - target)
            if (distance <= Math.abs(closest - target)) {
                closest = sum
            }
        }
    }
    return closest
}
// @lc code=end

console.log(threeSumClosest([0, 2, 1, -3], 1))
