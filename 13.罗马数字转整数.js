/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map=new Map([
        ["I",1],
        ["V",5],
        ["X",10],
        ["L",50],
        ["C",100],
        ["D",500],
        ["M",1000]
    ]);
    let ans=0;
    let i=0;
    while(i<s.length){
        let cur=map.get(s[i]);
        if(i==s.length-1){
            ans+=cur;
            break;
        }
        let next=map.get(s[i+1]);
        if(cur<next){
            ans+=next-cur;
            i++
        }else{
            ans+=cur;
        }
        i++;
    }
    return ans;


    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end