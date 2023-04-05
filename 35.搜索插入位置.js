/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0,r=nums.length-1;
    let mid;
    let flag;
    while(l<=r){
        mid=Math.floor((l+r)/2);
        if(target>nums[mid]){
            flag=0;
            l=mid+1;
        }else if(target<nums[mid]){
            flag=1;
            r=mid-1;
        }else{
            return mid;
        }
    }
    if(flag==0){
        return mid+1;
    }else {
        return mid;
    }
    
};
// @lc code=end

