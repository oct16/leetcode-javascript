/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const num = parseInt(str)
    if (!num) {
        return 0
    }

    let MAX
    while (Math.abs(num) > (MAX = 2 ** 31 - 1)) {
        return num > 0 ? MAX : -MAX - 1
    }

    return num
}
// @lc code=end
