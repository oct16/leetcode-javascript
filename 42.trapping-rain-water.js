/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    const size = height.length
    if (height == null || size === 0) return 0
    let LMax = []
    let RMax = []
    let res = 0
    LMax[0] = height[0]
    for (let i = 1; i < size; i++) {
        LMax[i] = Math.max(height[i], LMax[i - 1])
    }

    RMax[size - 1] = height[size - 1]
    for (let i = size - 2; i >= 0; i--) {
        RMax[i] = Math.max(height[i], RMax[i + 1])
    }

    for (let i = 0; i < size - 1; i++) {
        res += Math.min(LMax[i], RMax[i]) - height[i]
    }

    return res
}
// @lc code=end
