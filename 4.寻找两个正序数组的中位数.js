/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//暴力解决
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1){
        var l1=nums1.length;
        var l2=nums2.length;
    }
    for(i=0;i<l2;++i){
        nums1.push(nums2[i]);
    }
    nums1.sort(sortNumber);
    l1=nums1.length;
    if(l1%2==0){
        return (nums1[l1/2-1]+nums1[l1/2])/2;
    }else {
        return nums1[parseInt(l1/2)];
    }
};
function sortNumber(a,b){
    return a-b; 
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end