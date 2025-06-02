class Solution(object):
    def rowAndMaximumOnes(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: List[int]
        """
        idx = 0
        max1 = 0
        for i, row in enumerate(mat):
            cnt = row.count(1)
            if cnt > max1:
                max1 = cnt
                idx = i
        return [idx, max1]
