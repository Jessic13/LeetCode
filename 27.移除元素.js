/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ansLen=nums.length;
    // 双指针
    for(let i=0;i<ansLen;){
        if(nums[i]==val){
            nums[i]=nums[ansLen-1];
            ansLen--;
        }else{
            i++;
        }
    }
    return ansLen;

};
// @lc code=end

