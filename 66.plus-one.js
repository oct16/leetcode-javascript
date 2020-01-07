/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + carry
        if (digits[i] === 10) {
            digits[i] = 0
            carry = 1
        } else {
            carry = 0
            break
        }
    }

    if (carry) {
        digits.unshift(carry)
    }

    return digits
}
// @lc code=end
