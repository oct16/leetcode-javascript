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
    if (height == null || height.length === 0) return 0

    let res = 0
    for (let i = 0; i < height.length; i++) {
        let lMax = 0
        let rMax = 0

        for (let j = 0; j < i; j++) {
            lMax = Math.max(lMax, height[j])
        }
        for (let j = i + 1; j < height.length; j++) {
            rMax = Math.max(rMax, height[j])
        }

        const water = Math.min(lMax, rMax) - height[i]
        if (water > 0) res += water
    }

    return res
}
// @lc code=end
