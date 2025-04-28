var ProductOfNumbers = function() 
{
    this.nums = [1];
};

ProductOfNumbers.prototype.add = function(n) 
{
    if (n === 0) 
    {
        this.nums = [1];
    } 
    else 
    {
        this.nums.push(this.nums[this.nums.length - 1] * n);
    }
};

ProductOfNumbers.prototype.getProduct = function(k) 
{
    if (k >= this.nums.length) return 0;
    return this.nums[this.nums.length - 1] / this.nums[this.nums.length - k - 1];
};
