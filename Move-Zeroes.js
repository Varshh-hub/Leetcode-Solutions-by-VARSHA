/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }
    for (let i = write; i < nums.length; i++) {
        nums[i] = 0;
    }
};
