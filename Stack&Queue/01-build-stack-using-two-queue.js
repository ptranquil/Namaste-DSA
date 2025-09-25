/**
 * 225. Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 */

/**
1. Implemneted using two queue
2. Need to use only queue operations to implement stack.
3. enque: Push to back
4. dequeue: Remove from front
5. size
6. isEmpty
 */

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
// TC: O(1)
MyStack.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
// TC: Worst Case: O(n), Average: O(1) as we are not miving each time
MyStack.prototype.pop = function () {
    // Pushing all the element in q2 from q1 except the last one
    // rreturning the last element and reassigning q1 to q2 and q2 to q1
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return ans;
};

/**
 * @return {number}
 */
// TC: Worst Case: O(n), Average: O(1) as we are not miving each time
MyStack.prototype.top = function () {
    // Pushing all the element in q2 from q1
    // Storingthe last element to return and reassigning q1 to q2 and q2 to q1
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }
    let front = this.q1[0]; // peeking at the top
    this.q2.push(this.q1.shift());
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return front;
};
/**
 * @return {boolean}
 */
//O(1)
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */