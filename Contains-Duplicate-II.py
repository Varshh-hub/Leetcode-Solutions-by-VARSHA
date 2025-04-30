class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        s = {}
        for i in range(len(nums)):
            if nums[i] in s:
                if i - s[nums[i]] <= k:
                    return True
            s[nums[i]] = i
        return False
