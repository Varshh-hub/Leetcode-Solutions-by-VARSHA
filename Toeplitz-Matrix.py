class Solution(object):
    def isToeplitzMatrix(self, m):
        """
        :type m: List[List[int]]
        :rtype: bool
        """
        r = len(m)
        c = len(m[0])
        for i in range(1, r):
            for j in range(1, c):
                if m[i][j] != m[i - 1][j - 1]:
                    return False
        return True
