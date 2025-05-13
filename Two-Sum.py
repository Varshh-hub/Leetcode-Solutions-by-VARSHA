class Solution(object):
    def twoSum(self, nums, target):
        \\\
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        \\\
        num_map = {} 

        for i, num in enumerate(nums):
            c = target - num
            if c in num_map:
                return [num_map[c], i]
            num_map[num] = i

        return []  