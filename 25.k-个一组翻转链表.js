/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return head;
    if (k < 2) return head;
    let newHead = head;
    const travel = (node, preNode) => {
        let i = 0;
        let stack = [];
        while (node && i < k) {
            stack.push(node);
            node = node.next;
            i++;
        }
        let cur = stack.pop();
        if (i === k) {
            if (newHead === head) newHead = cur;
            if (preNode) preNode.next = cur;
            while (stack.length) {
                cur.next = stack.pop();
                cur = cur.next;
            }
            cur.next = node;
        }
        if (node) {
            return travel(node, cur);
        }
    }
    travel(head, null);
    return newHead;


};
// @lc code=end
