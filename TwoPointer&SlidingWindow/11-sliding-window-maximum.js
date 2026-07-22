/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/description/
 */


var maxSlidingWindow = function(nums, k) {
    let result = [];
    let q = []; // dequeue
    
    let i = j = 0;
    while(j<nums.length){

        // remove all the smaller element then than new one before pusing the new element
        while(q.length && nums[j] > q[q.length - 1]){
            q.pop();
        }
        q.push(nums[j]);

        if(j>=k-1){
            // push the top of the queue which will always the biggest element onto the result
            result.push(q[0]);
            nums[i] === q[0] && q.shift();
            i++;
        }
        j++
    }
    return result;
};

nums = [1,3,-1,-3,5,3,6,7], k = 3

console.log(maxSlidingWindow(nums, k))