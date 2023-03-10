/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len=nums.length
    for(let i=0;i<len;i++){
        if(nums[i]<=0){
            nums[i]=len+1;
        }
    }
    for(let i=0;i<len;i++){
        let temp=Math.abs(nums[i]);
        if(temp<=len){
            nums[temp-1]=-Math.abs(nums[temp-1]);
        }
    }
    for(let i=0;i<len;i++){
        if(nums[i]>0) return i+1;
    }
    return len+1;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = firstMissingPositive;
// @after-stub-for-debug-end