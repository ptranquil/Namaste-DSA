/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/description/
 */

var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let maxWater = -Infinity;
    while(l<r){
        let min = Math.min(height[l], height[r]);
        let area = min * (r-l);
        maxWater = Math.max(maxWater, area);

        if(height[l] > height[r]){
            r--
        } else {
            l++
        }
    }
    return maxWater;
};

height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))