class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        stack<int> s;
        int n = nums.size();
        vector<int> res(n, -1);  
        
        for(int i = 2 * n - 1; i >= 0; i--){
            while(!s.empty() && s.top() <= nums[i % n]){
                s.pop();
            }
            
            if (i < n && !s.empty()){
                res[i % n] = s.top();
            }
            
            s.push(nums[i % n]);
        }
        return res;
    }
};
