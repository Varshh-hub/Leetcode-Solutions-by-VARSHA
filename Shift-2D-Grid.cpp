class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
        int rows = grid.size();
        int cols = grid[0].size();
        int total = rows * cols;

        vector<vector<int>> result(rows, vector<int>(cols));

        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                int newIndex = (r * cols + c + k) % total;
                int newRow = newIndex / cols;
                int newCol = newIndex % cols;
                result[newRow][newCol] = grid[r][c];
            }
        }

        return result;
    }
};
