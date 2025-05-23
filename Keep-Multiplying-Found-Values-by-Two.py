class Solution(object):
    def findFinalValue(self, nums, o):
        """
        :type nums: List[int]
        :type original: int
        :rtype: int
        """
        num = set(nums)
        while o in num:
            o = o * 2
        return o