class Solution:
    def matrixReshape(self, mat, r, c):
        m = len(mat)
        n = len(mat[0])
        if m * n != r * c: return mat

        result = [[0] * c for _ in range(r)]
        row, col = 0, 0

        for i in range(m):
            for j in range(n):
                result[row][col] = mat[i][j]
                col += 1
                if col == c:
                    col = 0
                    row += 1
        return result
