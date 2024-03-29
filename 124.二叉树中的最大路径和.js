/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * 二叉树经典题 
 * copy
 */
var maxPathSum = function(root) {
    let maxSum=Number.MIN_SAFE_INTEGER;// 如果设置为0会报错 case：[-3]
    let dfs = (root) => {
        if (root==null) {
            return 0;
        }
        let left=dfs(root.left);
        let right=dfs(root.right);

        let innerMaxSum=left+root.val+right;
        maxSum=Math.max(innerMaxSum,maxSum);

        let outPutMaxSum=root.val+Math.max(0,left,right);

        return outPutMaxSum<0?0:outPutMaxSum;
    };
    dfs(root);
    return maxSum;

};
// @lc code=end

