class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        i, j = 0, len(arr) - 1

        if len(arr) < 3:
            return False

        while i + 1 < len(arr) and arr[i] < arr[i + 1]:
            i += 1
        while j > 0 and arr[j] < arr[j - 1]:
            j -= 1

        return i > 0 and j < len(arr) - 1 and i == j