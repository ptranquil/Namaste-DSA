/**
 * https://leetcode.com/problems/3sum/description/
 */

/**
 * BRUTE FORCE : Using 3 loops, using sorting of each triplet and adding to set in the form of string to avoid duplicates
 */
var threeSum = function(nums) {
    let set = new Set();
    let N = nums.length;
    for(let i=0;i<N-2;i++){
        for(let j=i+1;j<N-1;j++){
            for(let k=j+1;k<N;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    const triplet = [nums[i], nums[j], nums[k]]
                        .sort((a,b) => a - b);
                    set.add(triplet.join(','));
                }
            }
        }
    }
    return [...set].map(x => x.split(',').map(Number));
};



/**
 * Using two sum 
 */
var threeSum = function(arr) {
    let ans = [];
    arr.sort((a,b) => a - b);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!= arr[i-1]){
            twoSum(arr,i,ans);
        }
    }
    return ans;
};

var twoSum = function (arr,x,ans){
    let i = x+1;
    let j = arr.length-1;

    while(i < j){
        let sum = arr[i] + arr[j] + arr[x];
        if(sum > 0){
            j--;
        } else if (sum < 0){
            i++;
        } else {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;
            j--;
            while(i<j && arr[i] == arr[i-1]){
                i++;
            }
        }
    }
}