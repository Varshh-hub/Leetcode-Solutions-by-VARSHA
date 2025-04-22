var NumArray = function(nums) 
{
    this.p = [0];
    for (let i = 0; i < nums.length; i++) 
    {
        this.p[i + 1] = this.p[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) 
{
    return this.p[right + 1] - this.p[left];
};
