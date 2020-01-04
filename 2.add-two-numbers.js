/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1
    }
    var sTemp = ''
    var nResult = 0

    for (var i = 0; i < s.length; i++) {
        var str = s[i]
        if (sTemp.indexOf(str) === -1) {
            sTemp += str
        } else {
            if (sTemp.length > nResult) {
                nResult = sTemp.length
            }
            i = i - sTemp.length
            sTemp = ''
        }
    }

    return nResult > sTemp.length ? nResult : sTemp.length
}
// @lc code=end
