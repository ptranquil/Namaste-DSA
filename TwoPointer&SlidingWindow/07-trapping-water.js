/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 */

var trap = function(height) {
    let res = 0;
    let N = height.length;
    let leftMax = new Array(N).fill(0);
    let rightMax = new Array(N).fill(0);

    leftMax[0] = height[0];
    rightMax[N-1] = height[N-1];
    for(let i=1;i<N;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i]);
        rightMax[N-1-i] = Math.max(rightMax[N-i],height[N-1-i]);
    }

    // for(let i=N-2;i>=0;i--){
    //     rightMax[i] = Math.max(rightMax[i+1],height[i]);
    // }

    for(let i=0;i<N;i++){
        res += Math.min(leftMax[i],rightMax[i]) - height[i];
    }

    return res;

};

height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))
