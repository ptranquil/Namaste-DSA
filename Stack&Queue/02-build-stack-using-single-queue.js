/**
 * 225. Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 */

var MyStack = function () {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.queue.length;
    for (let i = 0; i < n - 1; i++) {
        this.queue.push(this.queue.shift());
    }
    let ans = this.queue.shift();
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.queue.length;
    for (let i = 0; i < n - 1; i++) {
        this.queue.push(this.queue.shift());
    }
    let front = this.queue[0];
    this.queue.push(this.queue.shift());
    return front;
};
/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0;
};
