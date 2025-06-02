class Solution(object):
    def isMonotonic(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        s, d = True, True
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                d = False
            if nums[i] < nums[i-1]:
                s = False
        return s or d