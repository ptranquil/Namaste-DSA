/**
 * 455. Assign Cookies
 * https://leetcode.com/problems/assign-cookies/description/
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a-b);
    s = s.sort((a,b) => a-b);

    let i=0;
    let j=0;
    let ans = 0;
    while(i<g.length && j<s.length){
        if(g[i] <= s[j]){
            ans++;
            i++;
        }
        j++;
    }
    return ans;
};