/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const matches = s.match(/\s{0,}([a-zA-Z]+)\s{0,}$/)
    if (matches) {
        return matches[1].length
    }
    return 0
}
// @lc code=end

