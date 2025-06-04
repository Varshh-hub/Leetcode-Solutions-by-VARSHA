class Solution {

    private void spiral(int[][] matrix, int nrow, int ncol,
                        List<Integer> res, int row, int col, int nxtrow, int nxtcol) {
        if (nrow == 0 || ncol == 0) return;

        for (int i = 0; i < ncol; ++i) {
            row = row + nxtrow;
            col = col + nxtcol;
            res.add(matrix[row][col]);
        }

        spiral(matrix, ncol, nrow - 1, res, row, col, nxtcol, -nxtrow);
    }

    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> res = new ArrayList<>();

        if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
            return res;

        spiral(matrix, matrix.length, matrix[0].length, res, 0, -1, 0, 1);
        return res;
    }
}