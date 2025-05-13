class Solution(object):
    def majorityElement(self, nums):
        \\\
        :type nums: List[int]
        :rtype: int
        \\\
        n = len(nums)
        count_map = defaultdict(int)

        for num in nums:
            count_map[num] += 1

        for num, count in count_map.items():
            if count > n // 2:
                return num

        return 0  
        