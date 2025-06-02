class Solution(object):
    def averageValue(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total = 0
        count = 0
        for i in range(len(nums)):
            if nums[i] % 2 == 0 and nums[i] % 3 == 0:
                total += nums[i]
                count += 1
        if count == 0:
            return 0
        return total // count
