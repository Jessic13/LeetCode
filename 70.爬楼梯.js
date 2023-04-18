/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 动态规划 简单版
 */
var climbStairs = function(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    let a=1,b=2;
    let temp;
    for(let i=3;i<=n;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;

};
// @lc code=end

