/**
 * 155. Min Stack
 * https://leetcode.com/problems/min-stack/description/
 */


var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length == 0){
        this.stack.push([val, val])
    } else {
        let lastMin = this.stack[this.stack.length-1];
        let min = Math.min(lastMin[1], val);
        this.stack.push([val, min]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    return val[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let val = this.stack[this.stack.length-1];
    return val[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[this.stack.length-1];
    return min[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */