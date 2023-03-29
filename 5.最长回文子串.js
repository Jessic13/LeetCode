/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * 1. 中心扩散法
 * 2. 动态规划法
 */
var longestPalindrome = function(s) {
    if(s==null||s.length<2){
        return s;
    }

    let maxStart=0; // 最长回文串的起点
    let maxEnd=0; // 最长回文串的终点
    let maxLen=1; // 最长回文串的长度

    let dp=Array.from({length:s.length},()=>new Array(s.length).fill(false));
    
    for(let r=1;r<s.length;r++){
        for(let l=0;l<r;l++){
            if(s[r]==s[l] && (r-l<=2 || dp[l+1][r-1])){
                dp[l][r]=true;
                if(maxLen<r-l+1){
                    maxLen=r-l+1;
                    maxStart=l;
                    maxEnd=r;
                }
            }
        }
    }
    return s.substring(maxStart,maxEnd+1);

};
// @lc code=end

