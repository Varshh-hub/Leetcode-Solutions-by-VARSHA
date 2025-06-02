class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        bool s = true; 
        bool d = true; 
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > nums[i - 1]) d = false;
            if (nums[i] < nums[i - 1]) s = false;
        }
        return s || d;
    }
};
