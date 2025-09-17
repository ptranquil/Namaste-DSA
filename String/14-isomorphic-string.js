/**
 * 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/description/
 */

var isIsomorphic = function(s, t) {
    const mapStoT = {};
    const mapTtoS = {};

    for (let i=0;i<s.length;i++) {
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};

s = "egg", t = "add"
console.log(isIsomorphic(s,t))