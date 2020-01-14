/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p) return !s

    const first = !!s && (p[0] === s[0] || p[0] === '.')

    if (p.length >= 2 && p[1] === '*') {
        return isMatch(s, p.slice(2)) || (first && isMatch(s.slice(1), p))
    } else {
        return first && isMatch(s.slice(1), p.slice(1))
    }
}
// @lc code=end
