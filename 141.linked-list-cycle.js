/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowP = head
    let fastP = head
    while (fastP !== null && fastP.next !== null) {
        slowP = slowP.next
        fastP = fastP.next.next
        if (slowP === fastP) {
            return true
        }
    }
    return false
}
// @lc code=end
