/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
var isPalindrome = function(head) {
    if (!head) return true
    let heap = head
    const list = [heap.val]

    while (heap.next) {
        heap = heap.next
        list.push(heap.val)
    }

    if (list.length === 1) return true

    return list.slice().reverse().join('') === list.join('')
}
// @lc code=end
