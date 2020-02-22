/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// var uniquePaths = function(m, n) {
//     let res = 0
//     function cacPath(m, n) {
//         if (m === 1 && n === 1) {
//             return res++
//         }
//         if (m > 1) {
//             cacPath(m - 1, n)
//         }
//         if (n > 1) {
//             cacPath(m, n - 1)
//         }
//     }
//     cacPath(m, n)
//     return res
// }
var uniquePaths = function(m, n) {
    const memo = {}
    function cacPath(m, n) {
        if (m === 1 || n === 1) {
            return 1
        }
        if (memo[m + ',' + n]) {
            return memo[m + ',' + n]
        }
        const path = cacPath(m - 1, n) + cacPath(m, n - 1)
        return (memo[m + ',' + n] = path)
    }
    return cacPath(m, n)
}
// @lc code=end
