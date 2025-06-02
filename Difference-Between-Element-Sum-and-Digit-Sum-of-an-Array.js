/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = 0, sum2 = 0;

    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
        let n = nums[i];
        while (n > 0) {
            sum2 += n % 10;
            n = Math.floor(n / 10);
        }
    }

    return Math.abs(sum1 - sum2);
};
