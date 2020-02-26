/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0
    }

    const m = obstacleGrid[0].length
    const n = obstacleGrid.length
    const dp = Array.from({ length: n }, () => new Array(m).fill(0))
    dp[0][0] = 1

    for (let i = 1; i < m; i++) {
        if (obstacleGrid[0][i] !== 1) {
            dp[0][i] = dp[0][i - 1]
        }
    }

    for (let i = 1; i < n; i++) {
        if (obstacleGrid[i][0] !== 1) {
            dp[i][0] = dp[i - 1][0]
        }
    }

    for (let i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            if (obstacleGrid[i][j] !== 1) {
                // target = up + left
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }

    return dp[n - 1][m - 1]
}
// @lc code=end
