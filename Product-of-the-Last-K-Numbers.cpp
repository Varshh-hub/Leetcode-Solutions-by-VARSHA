class ProductOfNumbers 
{
public:
    vector<int> nums;
    
    ProductOfNumbers() 
    {
        nums.push_back(1);
    }
    
    void add(int n) 
    {
        if (n == 0) 
        {
            nums.clear();
            nums.push_back(1);
        } else 
        {
            nums.push_back(nums.back() * n);
        }
    }
    
    int getProduct(int k) 
    {
        if (k >= nums.size()) return 0;
        return nums.back() / nums[nums.size() - k - 1];
    }
};
