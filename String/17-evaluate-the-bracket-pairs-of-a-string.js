/**
 * 1807. Evaluate the Bracket Pairs of a String
 * https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/description/
 */

/**
TC: O(n), n = length of string
SC: O(n) + O(m), m = length of knowledge
 */

var evaluate = function (s, knowledge) {
    // create map for knowledge
    let map = {};
    for (let k of knowledge) {
        map[k[0]] = k[1]
    }

    let res = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            let key = ''
            let j = i + 1;
            while (s[j] !== ')') {
                key += s[j];
                j++;
            }
            if(map[key]){
                res+=map[key];
            } else {
                res+='?'
            }
            i = j + 1;
        } else {
            res += s[i];
            i++;
        }
    }
    return res;
};

let s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
console.log(evaluate(s,knowledge));
//output: "bobistwoyearsold"