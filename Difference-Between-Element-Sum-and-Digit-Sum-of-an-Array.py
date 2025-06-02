class Solution(object):
    def differenceOfSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sum1 = 0
        sum2 = 0

        for i in range(len(nums)):
            sum1 += nums[i]
            n = nums[i]
            while n > 0:
                sum2 += n % 10
                n //= 10

        return abs(sum1 - sum2)
