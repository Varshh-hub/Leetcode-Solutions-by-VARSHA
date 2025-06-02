class Solution(object):
    def addToArrayForm(self, num, k):
        """
        :type num: List[int]
        :type k: int
        :rtype: List[int]
        """
        res = []
        i = len(num) - 1

        while i >= 0 or k > 0:
            if i >= 0:
                k += num[i]
                i -= 1
            res.append(k % 10)
            k //= 10

        return res[::-1]