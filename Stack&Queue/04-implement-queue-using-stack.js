/**
 * 232. Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/description/
 */

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // if s2 is empty transfer all element to s2 than pop
    if(this.s2.length == 0){
        let N = this.s1.length; // Using this.s1.length in for loop instaed of N will result in failure as every time we do pop the this.s1.length will shrink
        for(let i=0;i<N;i++){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // if s2 is empty transfer all element to s2 than return the element
    if(this.s2.length === 0){
        let N = this.s1.length
        for(let i=0;i<N;i++){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s2.length === 0 && this.s1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */