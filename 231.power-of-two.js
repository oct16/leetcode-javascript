/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let num = n
    while (num >= 1) {
        if (num === 1) {
            return true
        }

        if (num > 1) {
            num = num / 2

            if (parseInt(num.toString(), 10) !== num) {
                return false
            }
            continue
        }

        return false
    }
    return false
}
// @lc code=end
