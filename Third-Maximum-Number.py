class Solution(object):
    def thirdMax(self, nums):
        \\\
        :type nums: List[int]
        :rtype: int
        \\\
        uniqueNums = set(nums)
        if len(uniqueNums) < 3:
            return max(uniqueNums)
        uniqueNums = list(uniqueNums)
        uniqueNums.sort(reverse=True)
        return uniqueNums[2]