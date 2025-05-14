class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        int sumA = 0, sumB = 0;
        for (int a : A) sumA += a;
        for (int b : B) sumB += b;
        
        int diff = (sumA - sumB) / 2;
        unordered_set<int> setB(B.begin(), B.end());
        
        for (int a : A) {
            if (setB.count(a - diff)) {
                return {a, a - diff};
            }
        }
        
        return {};
    }
};
