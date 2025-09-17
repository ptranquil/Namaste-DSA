/**
 * 2248. Intersection of Multiple Arrays
 * https://leetcode.com/problems/intersection-of-multiple-arrays/
 */
var intersection = function(nums) {
    let res = [];
    for(let n of nums[0]){
        let oflag = true;
        for(let i=1;i<nums.length;i++){
            if(!nums[i].includes(n)){
                oflag = false;
                break;
            }
        }
        if(oflag){
            res.push(n)
        }
    }
    return res.sort((a, b) => a - b);
};

// Using faltten array & hashing
var intersection = function(nums) {
    let n = nums.length;
    nums = nums.flat();
    let freq = {};
    for(let n of nums){
        freq[n] = freq[n] ? freq[n] + 1 : 1;
    }

    let res = []
    for(let k in freq){
        if(freq[k] == n){
            res.push(Number(k))
        }
    }
    return res;
};

// without using inbuilt flat function
var intersection = function(nums) {
    let n = nums.length;
    let freq = {};

    for (let arr of nums) {
        let unique = new Set(arr); // avoid duplicates in same array
        for (let num of unique) {
            freq[num] = (freq[num] || 0) + 1;
        }
    }

    let res = []
    for(let k in freq){
        if(freq[k] == n){
            res.push(Number(k))
        }
    }
    return res;
};