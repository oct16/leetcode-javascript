/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('')
    b = b.split('')

    let carry = 0
    let result = ''
    while (a.length || b.length || carry) {
        let sum = +(a.pop() || 0) + +(b.pop() || 0) + carry

        if (sum === 2) {
            sum = 0
            carry = 1
        } else if (sum === 3) {
            sum = 1
            carry = 1
        } else {
            carry = 0
        }

        result = sum + result
    }
    return result
}
// @lc code=end
