/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const res = [];

    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return res;

    function spiral(matrix, nrow, ncol, res, row, col, nxtrow, nxtcol) {
        if (nrow === 0 || ncol === 0) return;

        for (let i = 0; i < ncol; i++) {
            row += nxtrow;
            col += nxtcol;
            res.push(matrix[row][col]);
        }

        spiral(matrix, ncol, nrow - 1, res, row, col, nxtcol, -nxtrow);
    }

    spiral(matrix, matrix.length, matrix[0].length, res, 0, -1, 0, 1);
    return res;
}