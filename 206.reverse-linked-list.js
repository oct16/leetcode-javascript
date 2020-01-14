/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let next = null
    let cur = head
    let rev = null
    while (cur) {
        next = cur.next // 存放后值
        cur.next = prev // 指向前值
        prev = cur      // 重置前值

        if (!next) {   // 退出条件
            rev = cur
        }
        cur = next      // 进入下一次循环
    }
    return rev
}
// @lc code=end
