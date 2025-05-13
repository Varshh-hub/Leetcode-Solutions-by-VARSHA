class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        \\\
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        \\\
        n2 = len(nums2)
        stack = []
        m = {}

        for num in nums2:
            while stack and stack[-1] <= num:
                m[stack.pop()] = num
            stack.append(num)

        for i in range(len(nums1)):
            nums1[i] = m.get(nums1[i], -1)

        return nums1