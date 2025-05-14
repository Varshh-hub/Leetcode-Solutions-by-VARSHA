class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int write = 0;
        for (int read = 0; read < nums.size(); read++) {
            if (nums[read] != 0) {
                nums[write] = nums[read];
                write++;
            }
        }
        for (int i = write; i < nums.size(); i++) {
            nums[i] = 0;
        }
    }
};
