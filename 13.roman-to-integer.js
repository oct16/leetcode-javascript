/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let val = 0
    for (let i = s.length; i > 0; i--) {
        const preStrVal = map[s[i]]
        const nextStrVal = map[s[i - 1]]
        if (!preStrVal || preStrVal <= nextStrVal) {
            val += nextStrVal
        } else {
            val -= nextStrVal
        }
    }
    return val
}
// @lc code=end
