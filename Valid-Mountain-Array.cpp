class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        int i = 0, j = arr.size() - 1;

        if (arr.size() < 3) return false;

        while (i + 1 < arr.size() && arr[i] < arr[i + 1]) i++;
        while (j > 0 && arr[j] < arr[j - 1]) j--;

        return i > 0 && j < arr.size() - 1 && i == j;
    }
};
