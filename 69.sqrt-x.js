/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0
    }

    let low = 0
    let high = 94906265 // Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));

    while (low < high) {
        const m = Math.floor((low + high) / 2)
        const mul = m * m

        if (mul <= x) {
            low = m
        } else {
            high = m
        }

        if (high - low <= 1) {
            return Math.floor((low + high) / 2)
        }
    }
}
// @lc code=end

