/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2;
    let actual = nums.reduce((a, b) => a + b, 0);
    return total - actual;
};
