/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let c=1; // 记录进位
    for(let i=digits.length-1;i>=0;i--){
        digits[i]+=c;
        c=Math.floor(digits[i]/10);
        digits[i]=digits[i]%10;
    }
    if(c==1){
        digits.unshift(1);
    }
    return digits;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end