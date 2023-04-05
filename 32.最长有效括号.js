/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max=0;
    let stack=new Stack();
    stack.push(-1);
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.isEmpty()){
                stack.push(i);
            }else{
                max=Math.max(max,i-stack.top());
            }
        }
    }
    return max;
};
class Stack {
    constructor() {
      this.items = []
    }
    // 新增元素
    push(el) {
      this.items.push(el)
    }
    // 删除栈顶的元素并返回其值
    pop() {
      return this.items.pop()
    }
    // 返回栈顶的元素
    top() {
      return this.items[this.items.length - 1]
    }
    // 清空栈
    clear() {
      this.items = []
    }
    // 栈的大小
    size() {
      return this.items.length
    }
    // 栈是否为空
    isEmpty() {
      return this.items.length === 0
    }
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestValidParentheses;
// @after-stub-for-debug-end