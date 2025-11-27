/**
 * 28. Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 */


var strStr = function(h, n) {
    for(let i=0;i<h.length-n.length;i++){
        let oflag = true;
        if(h[i] == n[0]){
            let startIndex = i;
            for(let j=1;j<n.length;j++){
                if(h[j+i] != n[j]){
                    oflag = false;
                    break;
                }
            }
            if(oflag){
                return startIndex
            }
        }
    }
    return -1;
};

haystack = "sadbutsad"
needle = "sad"
console.log(strStr(haystack, needle))