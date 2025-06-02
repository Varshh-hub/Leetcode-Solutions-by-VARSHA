/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sumOfGoodNumbers(nums, k) {
    let totalSum = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let isGood = true;

        if (i - k >= 0) {
            if (nums[i] <= nums[i - k]) {
                isGood = false;
            }
        }
        if (i + k < n) {
            if (nums[i] <= nums[i + k]) {
                isGood = false;
            }
        }

        if (isGood) {
            totalSum += nums[i];
        }
    }

    return totalSum;
}
