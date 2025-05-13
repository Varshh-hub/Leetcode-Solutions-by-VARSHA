/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);  
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
            stack.pop();
        }

        if (i < n && stack.length) {
            res[i % n] = stack[stack.length - 1];
        }

        stack.push(nums[i % n]);
    }

    return res;
};
