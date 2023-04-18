/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set=new Set();
    let ans=new Set();
    for(let i=0;i<nums1.length;i++){
        set.add(nums1[i]);
    }
    for(let i=0;i<nums2.length;i++){
        if(set.has(nums2[i])){
            ans.add(nums2[i]);
        }
    }
    let arr=[];
    for(let key of ans){
        arr.push(key);
    }
    return arr;
};
// @lc code=end

