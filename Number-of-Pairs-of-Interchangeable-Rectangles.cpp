class Solution {
public:
    long long interchangeableRectangles(vector<vector<int>>& r) {
        long long n = r.size();
        long long c = 0;
        unordered_map<double, int> mp;

        for (int i = 0; i < n; i++) {
            int x = r[i][0];
            int y = r[i][1];
            double z = (double)x / y;  
            c += mp[z];
            mp[z]++;
        }

        return c;
    }
};