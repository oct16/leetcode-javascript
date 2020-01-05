/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let low = 0
    let high = height.length - 1

    while (low < high) {
        const x = high - low
        const y = Math.min(height[low], height[high])
        const area = x * y
        if (area > max) {
            max = area
        }

        if (height[low] >= height[high]) {
            high--
        } else {
            low++
        }
    }

    return max
}
// @lc code=end
