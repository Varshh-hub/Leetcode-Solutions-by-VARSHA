/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;
    const total = rows * cols;

    const result = Array.from({ length: rows }, () => Array(cols));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const newIndex = (r * cols + c + k) % total;
            const newRow = Math.floor(newIndex / cols);
            const newCol = newIndex % cols;
            result[newRow][newCol] = grid[r][c];
        }
    }

    return result;
};
