/**
 * 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 */

var evalRPN = function(tokens) {
    let stack = [];
    let expressions = ['+', '-', '/', '*']
    for(let val of tokens){
        if(!expressions.includes(val)){
            stack.push(val);
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let result = eval(`${b} ${val} ${a}`)
            stack.push(Math.trunc(result));
        }
    }
    let result = Number(stack.pop());
    return result;
};

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(token));


/** Language independent code */
var evalRPN = function (tokens) {
    let stack = []
    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let secondElement = Number(stack.pop())
            let firstElement = Number(stack.pop())
            let interimResult = null
            if (token === "+") {
                interimResult = firstElement + secondElement
                stack.push(interimResult)
            } else if (token === "-") {
                interimResult = firstElement - secondElement
                stack.push(interimResult)
            } else if (token === "*") {
                interimResult = firstElement * secondElement
                stack.push(interimResult)
            } else if (token === "/") {
                interimResult = firstElement / secondElement
                stack.push(interimResult < 0 ? Math.ceil(interimResult) : Math.floor(interimResult))
            }

        } else {
            stack.push(token)
        }
    }
    return Number(stack.pop())
};

// another appraoch
var evalRPN = function (tokens) {
    let stack = [];
    let map = {
        '+': (a,b) => b+a,
        '*': (a,b) => b*a,
        '-': (a,b) => b-a,
        '/': (a,b) => Math.trunc(b/a),
    }

    for(let chr of tokens){
        if(map[chr]){
            let a = stack.pop();
            let b = stack.pop();
            let result = map[chr](+a,+b);
            stack.push(result); 
        } else {
            stack.push(chr);
        }
    }
    return Number(stack.pop());
};