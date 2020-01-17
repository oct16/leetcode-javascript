/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {}
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]

        const sorted = Array.from(str)
            .sort()
            .join('')
        if (!result[sorted]) {
            result[sorted] = []
        }
        result[sorted].push(str)
    }
    return Object.values(result)
}
// @lc code=end
