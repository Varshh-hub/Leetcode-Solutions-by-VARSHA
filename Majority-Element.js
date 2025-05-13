/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [num, count] of map) {
        if (count > nums.length / 2) {
            return num;
        }
    }

    return 0;  
};
