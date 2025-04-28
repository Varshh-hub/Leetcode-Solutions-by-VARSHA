class ProductOfNumbers 
{
    private List<Integer> nums;
    
    public ProductOfNumbers() 
    {
        nums = new ArrayList<>();
        nums.add(1);
    }
    
    public void add(int n) 
    {
        if (n == 0) 
        {
            nums.clear();
            nums.add(1);
        } 
        else 
        {
            nums.add(nums.get(nums.size() - 1) * n);
        }
    }
    
    public int getProduct(int k) 
    {
        if (k >= nums.size()) return 0;
        return nums.get(nums.size() - 1) / nums.get(nums.size() - k - 1);
    }
}
