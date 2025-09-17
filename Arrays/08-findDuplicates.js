/**
 * LC: 442. Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 * 
 * Can be easily done using hashmap but it will have a 
 * TC: O(n) + O(n)
 * SC: O(n)
 * 
 * Requirement: write an algorithm that runs in O(n) time and uses only constant auxiliary space
 */

var findDuplicates = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        if (nums[val - 1] < 0) {
            res.push(val);
        } else {
            nums[val - 1] = -nums[val - 1];
        }
    }
    return res;
};
nums = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(nums));

/**
Here we used the input array itself as a marker.

Trick to solve: Use the sign marking technique 
    1. Iterate through each number in nums.
    2. For each num, take its absolute value → val = Math.abs(num).
    3. Look at the index val - 1.
        - If nums[val - 1] is negative, it means we have already seen this number once → so it’s a duplicate → add val to result.
        - Otherwise, mark it as visited by making nums[val - 1] = -nums[val - 1].
    4. This works because values are in [1, n], so they map perfectly to indices 0 … n-1.

DRY RUN for the above array
i=0 → val=4 → nums[3] positive → mark →     nums=[4,3,2,-7,8,2,3,1]
i=1 → val=3 → nums[2] positive → mark →     nums=[4,3,-2,-7,8,2,3,1]
i=2 → val=2 → nums[1] positive → mark →     nums=[4,-3,-2,-7,8,2,3,1]
i=3 → val=7 → nums[6] positive → mark →     nums=[4,-3,-2,-7,8,2,-3,1]
i=4 → val=8 → nums[7] positive → mark →     nums=[4,-3,-2,-7,8,2,-3,-1]
i=5 → val=2 → nums[1] is already negative → duplicate → res=[2]
i=6 → val=3 → nums[2] is already negative → duplicate → res=[2,3]
i=7 → val=1 → nums[0] positive → mark →     nums=[-4,-3,-2,-7,8,2,-3,-1]

 */



