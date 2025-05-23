class Solution {
public:
    int findFinalValue(vector<int>& nums, int o) {
        unordered_set<int> n(nums.begin(),nums.end());
        
        while(n.count(o)){
            o = o * 2;
        }
        return o;
    }
};