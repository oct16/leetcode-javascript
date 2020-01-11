/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return []
    }
    const results = []
    function group(str, left, right) {
        if (left) group(str + '(', left - 1, right)
        if (right > left) group(str + ')', left, right - 1)

        if (!left && !right) {
            return results.push(str)
        }
    }

    group('(', n - 1, n)
    return results
}
// @lc code=end
