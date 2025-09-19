/**
 * 453. Minimum Moves to Equal Array Elements
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 */


var minMoves = function(nums) {
    let min = Math.min(...nums);
    let moves = 0;
    for(let ele of nums){
        moves += Math.abs(ele-min)
    }
    return moves;
};
nums = [1,2,3]
console.log(minMoves(nums))

/**
 * APPROACH:
 * Insted of thinking of incresing (n-1) element, we can think of decreasing the current element to the min value of nums
 */
