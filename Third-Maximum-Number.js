/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) 
{
    let uniqueNums = new Set(nums);
    if (uniqueNums.size < 3) 
    {
        return Math.max(...uniqueNums);
    }
    let sortedNums = [...uniqueNums].sort((a, b) => b - a);
    return sortedNums[2];
};
