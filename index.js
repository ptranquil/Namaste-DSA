var removeDuplicates = function(nums) {
    let N = nums.length;
    let x=0;
    let y=1;

    while(y<N){
        if(nums[x] != nums[y]){
            x++;
            nums[x] = nums[y];
        }
        y++;
    }
    return nums;
};

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))