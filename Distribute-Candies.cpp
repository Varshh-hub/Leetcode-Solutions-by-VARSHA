class Solution {
public:
    int distributeCandies(vector<int>& candies) {
        unordered_set<int> uniqueCandies(candies.begin(), candies.end());
        return min((int)uniqueCandies.size(), (int)candies.size() / 2);
    }
};