class Solution {
private:
    void spiral(vector<vector<int>>& matrix, int nrow, int ncol,
                vector<int>& res, int row, int col, int nxtrow, int nxtcol) {
        if (nrow == 0 || ncol == 0) return;

        for (int i = 0; i < ncol; ++i) {
            row = row + nxtrow;
            col = col + nxtcol;
            res.push_back(matrix[row][col]);
        }
        spiral(matrix, ncol, nrow - 1, res, row, col, nxtcol, -nxtrow);
    }

public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> res;

        if (matrix.empty() || matrix[0].empty()) return res;

        spiral(matrix, matrix.size(), matrix[0].size(), res, 0, -1, 0, 1);
        return res;
    }
};
