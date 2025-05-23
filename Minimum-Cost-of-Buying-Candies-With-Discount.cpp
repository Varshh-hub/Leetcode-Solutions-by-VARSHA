class Solution {
public:
    int minimumCost(vector<int>& cost) {
        sort(cost.begin(), cost.end(), greater<int>());
        int sum = 0;
        int count = 0;
        int n = cost.size();
        for (int i = 0; i < n; i++) {
            if (count == 2) {
                count = 0;
            } else {
                sum =sum + cost[i];
                count++;
            }
        }

        return sum;
    }
};