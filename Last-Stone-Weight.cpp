class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
    while (stones.size() > 1) {
        sort(stones.begin(), stones.end());
        int n = stones.size();
        int first = stones[n - 1];
        int second = stones[n - 2];
        stones.pop_back();
        stones.pop_back();
        if (first != second) {
            stones.push_back(first - second);
        }
    }
    if (stones.size() == 1) {
        return stones[0];
    }
    return 0;
}
};