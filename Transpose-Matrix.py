class Solution(object):
    def transpose(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        rows, cols = len(matrix), len(matrix[0])
        result = [[0] * rows for _ in range(cols)]

        for r in range(rows):
            for c in range(cols):
                result[c][r] = matrix[r][c]

        return result
