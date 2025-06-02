class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
        int idx = 0, max1 = 0;
        for (int i = 0; i < mat.size(); i++) {
            int cnt = 0;
            for (int x : mat[i]) {
                if (x == 1) cnt++;
            }
            if (cnt > max1) {
                max1 = cnt;
                idx = i;
            }
        }
        return {idx, max1};
    }
};
