class Solution {
public:
    int maxProduct(int n) {
        vector<int> v;
        while (n > 0) {
            v.push_back(n % 10);
            n = n/10;
        }
        int s = v.size();
        int maxp = 0;
        for (int i = 0; i < s; ++i) {
            for (int j = i + 1; j < s; ++j) {
                maxp = max(maxp, v[i] * v[j]);
            }
        }
        return maxp;
    }
};
