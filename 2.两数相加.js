/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return add(l1,l2,0);
    
};

var add=function(l1,l2,carry){
    if( !l1 && !l2 && carry===0){
        return null;
    }

    let n1=l1?l1.val:0;
    let n2=l2?l2.val:0;
    let sum=n1+n2+carry;
    carry=Math.floor(sum/10);

    let node=new ListNode(sum%10);
    
    if(l1){
        l1=l1.next;
    }
    if(l2){
        l2=l2.next;
    }

    node.next=add(l1,l2,carry);
    
    return node;

}

// @lc code=end

