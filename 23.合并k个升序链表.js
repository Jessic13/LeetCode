/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 *  暴力法，全部取出排序，再链表重组
 */
var mergeKLists = function(lists) {
    let arr=[];
    for(let i=0;i<lists.length;i++){
        while(lists[i]){
            arr.push(lists[i].val);
            lists[i]=lists[i].next;
        }
    }
    arr.sort(function(a,b){
        return a-b;
    });
    let ans=node=new ListNode(0);
    for(let i=0;i<arr.length;i++){
        node.next=new ListNode(arr[i]);
        node=node.next;
    }
    return ans.next;
};
// @lc code=end

