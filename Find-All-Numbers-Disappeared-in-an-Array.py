class Solution:
    def findDisappearedNumbers(self, nums):
        n = len(nums)
        for i in range(n):
            idx = abs(nums[i]) - 1
            nums[idx] = -abs(nums[idx])

        res = []
        for i in range(n):
            if nums[i] > 0:
                res.append(i + 1)
        return res
