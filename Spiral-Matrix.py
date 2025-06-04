class Solution(object):
    def spiralOrder(self, matrix):
        \\\
        :type matrix: List[List[int]]
        :rtype: List[int]
        \\\
        res = []

        if not matrix or not matrix[0]:
            return res

        def spiral(matrix, nrow, ncol, res, row, col, nxtrow, nxtcol):
            if nrow == 0 or ncol == 0:
                return

            for _ in range(ncol):
                row = row + nxtrow
                col = col + nxtcol
                res.append(matrix[row][col])
            spiral(matrix, ncol, nrow - 1, res, row, col, nxtcol, -nxtrow)

        spiral(matrix, len(matrix), len(matrix[0]), res, 0, -1, 0, 1)
        return res