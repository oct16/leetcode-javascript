/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = 1

    sign = sign * (dividend > 0 ? 1 : -1)
    sign = sign * (divisor > 0 ? 1 : -1)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    const originDivisor = divisor
    const MAX = 2 ** 31 - 1
    if (divisor > dividend) {
        return 0
    }

    let result = 0
    while (dividend >= divisor) {
        let shift = 0
        while (dividend >> 1 >= divisor) {
            shift++
            divisor = divisor << 1
        }

        result = result + (1 << shift)
        dividend = dividend - divisor
        divisor = originDivisor
    }

    result = result * sign
    if (result > MAX) {
        return MAX
    }
    return result
}
// @lc code=end
