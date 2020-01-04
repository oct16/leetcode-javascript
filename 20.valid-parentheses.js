/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length === 1) return false
    var arr = []
    s.split('').forEach(str => {
        var point = '{[()]}'.indexOf(str)
        if (point !== -1) {
            if (arr[arr.length - 1] + point === 5) {
                arr.pop()
            } else {
                arr.push(point)
            }
        }
    })
    return arr.length === 0
}
// @lc code=end
