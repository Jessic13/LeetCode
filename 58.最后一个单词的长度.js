/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let regEx1 = /\s+/g; // 把中间空格去掉
    let regEx2=/^\s+|\s+$/g; // 把首尾空格去掉
    let arr=s.replace(regEx1,' ').replace(regEx2,'').split(' ');
    return arr[arr.length-1].length;
};
// @lc code=end

