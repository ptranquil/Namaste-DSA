/**
 * 2210. Count Hills and Valleys in an Array
 * https://leetcode.com/problems/count-hills-and-valleys-in-an-array/description/
 */

// O(n) & O(1) : Optimize approach

var countHillValley = function(nums) {
    let N = nums.length;
    let prev = nums[0];
    let count = 0;
    for(let i=0;i<N-1;i++){
        // if dupulicate skip
        let next = nums[i+1]        
        if(nums[i] == next) continue;

        if((nums[i] < prev && nums[i] < next) || (nums[i] > prev && nums[i] > next)){
            count++
        }
        prev=nums[i]
    }
    return count;
};

// O(n) & O(n): Extra space by removing the duplicate element
var countHillValley = function(nums) {
    // Step 1: Remove consecutive duplicates
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            arr.push(nums[i]);
        }
    }

    // Step 2: Count hills and valleys
    let count = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
            (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
            count++;
        }
    }

    return count;
};



// O(n2) & O(1): Finding the closes left & right. Then checking for hill & valley
var countHillValley = function(nums) {
    let N = nums.length;
    let count = 0;
    let leftClosest = nums[0];
    for(let i=1;i<N-1;i++){
        if(nums[i] == nums[i+1]){
            continue;
        }
        let left = -1;
        let right = -1;
        // findind the closest left element
        for(let l=i-1;l>=0;l--){
            if(nums[l]!=nums[i]){
                left = l;
                break;
            }
        }

        //finding the closest right element
        for(let r=i+1;r<N;r++){
            if(nums[r]!=nums[i]){
                right=r;
                break;
            }
        }

        if(left!=-1 && right!=-1){
            if((nums[left] < nums[i]) && (nums[right]<nums[i])){
                //hill
                count++
            }

            if((nums[left] > nums[i]) && (nums[right] > nums[i])){
                //valley
                count++
            }
        }
    }
    return count;
};

let nums = [2,4,1,1,6,5];
console.log(countHillValley(nums))