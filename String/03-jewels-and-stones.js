/**
 * 771. Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/description/
 */

// Brute: TC: O(N^2)
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
};

// without using includes (2 loops) TC: O(N^2)
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i] === jewels[j]){
                count++;
                break;
            }
        }
    }
    return count;
};

// Optimize using set
// TC: O(n), SC: O(26) or O(1): Because there is a constraint that jewels have english alphabet which can be max 26

var numJewelsInStones = function(jewels, stones) {
    let count=0;
    let set = new Set();
    for(let i=0;i<jewels.length;i++){
        if(!set.has(jewels[i])){
            set.add(jewels[i])
        }
    }
     for(let j=0;j<stones.length;j++){
        if(set.has(stones[j])){
            count++;
        }
    }
    return count;
};

