/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let s = true; 
    let d = true; 
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) d = false;
        if (nums[i] < nums[i - 1]) s = false;
    }
    
    return s || d;
};
