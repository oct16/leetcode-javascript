/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) {
        return null
    }

    let tail = head
    for (let i = 1; i < k; i++) {
        tail = tail.next
        if (!tail) return head
    }

    const next = tail.next
    tail.next = null
    reverse(head)
    head.next = reverseKGroup(next, k)
    return tail

    function reverse(cur) {
        // detail in leetcode 206
        let prev = null
        while (cur) {
            const next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        return prev
    }
}
// @lc code=end

function ListNode(val, next) {
    this.val = val
    this.next = next
}
console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2))
