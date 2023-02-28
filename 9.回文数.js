/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
/**
 * 空间换时间
 * 转换成字符串来判断能使速度快上一半
 * 1. 字符串收尾比较
 * 2. 处理数字
 */
var isPalindrome = function(x) {
    if (x<0) return false;
    let num=0;
    let cur=x;
    while(cur>0){
        num=num*10+cur%10;
        cur=Math.floor(cur/=10);
    }
    if(num==x){
        return true;
    }else{
        return false;
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end