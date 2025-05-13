class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> row(rowIndex + 1, 1);
        for (int i = 1; i <= rowIndex / 2; i++) {
            row[i] = (long long)row[i - 1] * (rowIndex - i + 1) / i;
            row[rowIndex - i] = row[i];
        }
        return row;
    }
};
