class Solution(object):
    def modifiedMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        m, n = len(matrix), len(matrix[0])

        ans = [[0]*n for _ in range(m)]
        col = [-1]*n

        for i in range(n):
            for j in range(m):
                ans[j][i] = matrix[j][i]
                col[i] = max(col[i], matrix[j][i])

        for i in range(n):
            for j in range(m):
                if ans[j][i] == -1:
                    ans[j][i] = col[i]

        return ans
