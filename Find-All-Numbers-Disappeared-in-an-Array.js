var findDisappearedNumbers = function(nums) 
{
    let n = nums.length;
    for (let i = 0; i < n; i++) 
    {
        let idx = Math.abs(nums[i]) - 1;
        nums[idx] = -Math.abs(nums[idx]);
    }

    let res = [];
    for (let i = 0; i < n; i++) 
    {
        if (nums[i] > 0) 
        {
            res.push(i + 1);
        }
    }
    return res;
};
