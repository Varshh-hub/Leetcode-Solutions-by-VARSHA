/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, o) {
    const set = new Set(nums);

    while(set.has(o)){
        o = o * 2;
    }
    return o;
};


