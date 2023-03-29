/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs==null||strs.length==0){
        return "";
    }
    let flag=0;
    let ansStr="";
    let len=0; // 标记当前公共前缀长度
    for(let i=0;i<strs[0].length;i++){
        let c=strs[0][i];
        for(let j=1;j<strs.length;j++){
            if(strs[j].length==i||strs[j][i]!=c){
                return strs[0].substring(0,i);
            }
        }
    }
    return strs[0];

};
// @lc code=end

