class Solution(object):
    def rob(self, nums):
        \\\
        :type nums: List[int]
        :rtype: int
        \\\
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]
        
        prev2, prev1 = 0, 0
        
        for num in nums:
            current = max(prev1, prev2 + num)
            prev2, prev1 = prev1, current
        
        return prev1