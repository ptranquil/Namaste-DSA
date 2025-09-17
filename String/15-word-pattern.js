/**
 * 
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");
    if(s.length != pattern.length) return false;

    const mapPS = new Map();
    const mapST = new Map();

    for (let i=0;i<s.length;i++) {
        if (!mapPS.get(pattern[i]) && !mapST.get(s[i])) {
            mapPS.set(pattern[i], s[i]);
            mapST.set(s[i], pattern[i])
        } else if (mapPS.get(pattern[i]) !== s[i] || mapST.get(s[i]) !== pattern[i]) {
            return false;
        }
    }

    return true;
};

pattern = "abba"
s = "dog constructo constructo dog"
console.log(wordPattern(pattern, s))

// CORNER CASE: Does not work with object with the higher key length. E.g. constructor <-> b, failed for this tescase in case of objects