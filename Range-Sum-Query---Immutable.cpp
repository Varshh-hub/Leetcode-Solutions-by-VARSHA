class NumArray {
private:
    int prefixSums[10010]; 
    int size;

public:
    NumArray(vector<int>& nums) 
    {
        size = nums.size();
        prefixSums[0] = 0;

        for (int i = 0; i < size; i++) 
        {
            prefixSums[i + 1] = prefixSums[i] + nums[i];
        }
    }

    int sumRange(int left, int right) 
    {
        return prefixSums[right + 1] - prefixSums[left];
    }
};
