/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length

    const dp = Array.from({ length: m }, () => new Array(n).fill(0))

    for (let i = 1; i < m; i++) {
        dp[i][0] = i
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = i
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // skip
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    // insert
                    dp[i][j - 1] + 1,
                    // replace
                    dp[i - 1][j - 1] + 1,
                    // delete
                    dp[i - 1][j] + 1
                )
            }
        }
    }

    return dp[m - 1][n - 1]
}
// @lc code=end
