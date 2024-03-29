/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0,r=height.length-1;
    let cap=0;
    while(l<=r){
        if(height[l]<height[r]){
            cap=Math.max(cap,height[l]*(r-l));
            l++;
        }else{
            cap=Math.max(cap,height[r]*(r-l));
            r--;
        }
    }
    return cap;
};
// @lc code=end

