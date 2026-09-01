/**
 * 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 */

var maxProduct = function(nums) {
    let n = nums.length;
    let maxProduct = maxProductSoFar = minProductSoFar = nums[0];
    for(let i=1;i<n;i++){
        let a = maxProductSoFar * nums[i];
        let b = minProductSoFar * nums[i];
        maxProductSoFar = Math.max(a, b, nums[i]);
        minProductSoFar = Math.min(a, b, nums[i]);
        maxProduct = Math.max(maxProduct, maxProductSoFar)
    }
    return maxProduct;
};



var maxProduct = function(nums) {
    let ltrProd = rtlProd = 1;
    let maxProd = -Infinity;
    let n = nums.length;
    for(let i=0;i<n;i++){
        ltrProd*= nums[i];
        maxProd = Math.max(maxProd, ltrProd);
        if(ltrProd === 0) ltrProd = 1;
    }
    for(let i=n-1;i>=0;i--){
        rtlProd*= nums[i];
        maxProd = Math.max(maxProd, rtlProd);
        if(rtlProd === 0) rtlProd = 1;
    }
    return maxProd;
};

// same above approach using 1 for loop
var maxProduct = function(nums) {
    let ltrProd = rtlProd = 1;
    let maxProd = -Infinity;
    let n = nums.length;
    for(let i=0;i<n;i++){
        ltrProd*= nums[i];
        rtlProd*= nums[n-i-1];
        maxProd = Math.max(maxProd, ltrProd, rtlProd);
        if(ltrProd === 0) ltrProd = 1;
        if(rtlProd === 0) rtlProd = 1;
    }
    return maxProd;
};