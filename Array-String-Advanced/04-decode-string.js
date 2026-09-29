/**
 * 394. Decode String
 * https://leetcode.com/problems/decode-string/description/
 */
var decodeString = function(s) {
    let i=0;
    function decode(){
        let res =""
        let num = 0;
        while(i<s.length){
            let char = s[i]
            if(!isNaN(char)){
                num = num * 10 + parseInt(char);
                i++;
            } else if (char === '['){
                i++;
                let str = decode();
                str = str.repeat(num);
                res += str;
                num = 0;
            } else if (char === ']'){
                i++;
                return res;
            } else {
                res+=char;
                i++;
            }
        }
        return res;
    }
    return decode();
};