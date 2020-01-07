/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cached = new Array(0, 1, 2, 3)

    function climb(n) {
        if (cached[n]) {
            return cached[n]
        }

        const step = climb(n - 1) + climb(n - 2)
        cached[n] = step
        return step
    }

    return climb(n)
}
// @lc code=end
