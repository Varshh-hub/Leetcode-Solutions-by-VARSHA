/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            total += nums[i];
            count++;
        }
    }
    return count === 0 ? 0 : Math.floor(total / count);
};
