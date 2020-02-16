/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null
    }
    let curA = headA
    let curB = headB
    while (curA !== curB) {
        curA = curA === null ? headB : curA.next
        curB = curB === null ? headA : curB.next
    }
    return curB
}
// @lc code=end
