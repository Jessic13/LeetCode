/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set=new Set();
    let max=0;
    let tmp=-1;//右指针
    for(i=0;i<s.length;i++){
        if(i!=0){
            //移除上一个窗口的第一位
            set.delete(s[i-1]);
        }
        while(tmp+1<s.length&&!set.has(s[tmp+1])){ 
            set.add(s[tmp+1]);
            //右指针向右移动找最长子串
            tmp++;
        }
        max=Math.max(max,tmp-i+1);
    }
    return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end