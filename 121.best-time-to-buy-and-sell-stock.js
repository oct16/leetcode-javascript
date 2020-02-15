/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let maxProfit = 0
//     for (let i = 0; i < prices.length - 1; i++) {
//         const cur = prices[i]
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] < cur) {
//                 break
//             }
//             if (prices[j] - cur > maxProfit) {
//                 maxProfit = prices[j] - cur
//             }
//         }
//     }

//     return maxProfit
// }

var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }
    let low = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        low = Math.min(prices[i], low)
        profit = Math.max(prices[i] - low, profit)
    }
    return profit
}
// @lc code=end
